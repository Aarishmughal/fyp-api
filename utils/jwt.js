const jwt = require('jsonwebtoken');

exports.signToken = (payload, type) =>
  jwt.sign(
    payload,
    type === 'access'
      ? process.env.ACCESS_TOKEN_SECRET
      : process.env.REFRESH_TOKEN_SECRET,
    {
      expiresIn:
        type === 'access'
          ? process.env.ACCESS_TOKEN_EXPIRES_IN
          : process.env.REFRESH_TOKEN_EXPIRES_IN,
    }
  );

exports.verifyToken = (token, type) => {
  return jwt.verify(
    token,
    type === 'access'
      ? process.env.ACCESS_TOKEN_SECRET
      : process.env.REFRESH_TOKEN_SECRET
  );
};
