const mongoose = require("mongoose");

const connectMongo = async (DB_URI) => {
  if (mongoose.connection.readyState === 1) return mongoose.connection;
  await mongoose.connect(DB_URI, {
    autoIndex: true,
  });
  return mongoose.connection;
};

const User = require("./user.model");
const AuthAccount = require("./authAccount.model");

module.exports = { connectMongo, User, AuthAccount };
