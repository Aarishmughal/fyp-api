const handleAsync = require('../utils/handleAsync');
const { AuthAccount } = require('./../models');

exports.signup = handleAsync(async (req, res, next) => {
  const { email, password } = req.body;
});
exports.login = handleAsync(async (req, res, next) => {
  const { email, password } = req.body;
  console.log(email, password);
  res.status(200).json({ message: 'Login successful' });
});
