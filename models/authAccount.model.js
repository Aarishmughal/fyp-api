const mongoose = require('mongoose');

const authAccountSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    provider: {
      type: String,
      enum: ['email', 'google', 'github', 'azure'],
      default: 'email',
    },
    providerUid: { type: String },
    passwordHash: { type: String },
    status: { type: String, enum: ['active', 'revoked'], default: 'active' },
  },
  { timestamps: true }
);

module.exports = mongoose.model('AuthAccount', authAccountSchema);
