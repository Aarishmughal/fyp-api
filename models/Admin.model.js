const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      unique: true,
    },
    privileges: {
      type: [String],
      enum: ['manage_users', 'manage_tenants', 'view_reports', 'full_access'],
      default: ['full_access'],
    },
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;
