const handleAsync = require('../utils/handleAsync');
const { AuthAccount } = require('../models');

exports.adminSignup = handleAsync(async (req, res, next) => {
  res
    .status(201)
    .json({ message: `Admin trying to Signup with Data: ${req.body}` });
  // const { email, password } = req.body;

  // console.log(email, password);
  // res.status(201).json({ message: 'Admin signup successful' });
});
exports.adminLogin = handleAsync(async (req, res, next) => {
  const { email, password } = req.body;
  console.log(email, password);
  res.status(200).json({ message: 'Admin login successful' });
});
