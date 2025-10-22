const mongoose = require('mongoose');

const authAccountSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      refPath: 'User',
      required: true,
    },
    provider: {
      type: String,
      required: true,
      enum: ['password', 'google', 'sms_otp'],
      default: 'password',
    },
    providerUid: { type: String },
    passwordHash: { type: String },
    meta: { type: Object, default: {} },
    isActive: { type: Boolean, default: true },
  },
  {
    timestamps: true,
  }
);

const AuthAccount = mongoose.model('AuthAccount', authAccountSchema);

module.exports = AuthAccount;
