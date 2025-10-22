const jwt = require('./../utils/jwt');
const AppError = require('../utils/AppError');
const Tenant = require('../models/tenant.model');
const handleAsync = require('../utils/handleAsync');
const { AuthAccount } = require('../models');

exports.signup = handleAsync(async (req, res, next) => {
  const { name, type, password, passwordConfirm } = req.body;

  if (!name || !type || !password || !passwordConfirm) {
    return next(new AppError('Please provide all required fields.', 400));
  }
  if (password !== passwordConfirm) {
    return next(new AppError('Passwords do not match.', 400));
  }
  const newTenant = await Tenant.create({
    name,
    type,
  });
  await AuthAccount.create({
    userModel: 'Tenant',
    user: newTenant._id,
  });
  if (!newTenant) {
    return next(new AppError('Tenant could not be created', 404));
  }

  const accessToken = jwt.signToken(
    { id: newTenant._id, model: 'Tenant' },
    'access'
  );
  const refreshToken = jwt.signToken(
    { id: newTenant._id, model: 'Tenant' },
    'refresh'
  );

  res.status(200).json({ status: 'success', message: 'Signup Route' });
});

exports.login = handleAsync(async (req, res, next) => {
  res.status(200).json({ status: 'success', message: 'Login Route' });
});
