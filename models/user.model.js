const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true, index: true },
    phone: { type: String },
    displayName: { type: String },
    status: {
      type: String,
      enum: ['active', 'inactive', 'banned'],
      default: 'active',
    },
    emailVerifiedAt: { type: Date },
    avatar: { type: String },
    preferences: { type: Object },
  },
  { timestamps: true }
);

const userTenantSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    tenantId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Tenant',
      required: true,
    },
    role: {
      type: String,
      enum: ['owner', 'staff', 'viewer'],
      default: 'viewer',
    },
    status: {
      type: String,
      enum: ['active', 'pending', 'removed'],
      default: 'active',
    },
    joined_at: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

userTenantSchema.index({ userId: 1, tenantId: 1 }, { unique: true });

const User = mongoose.model('User', userSchema);
const UserTenant = mongoose.model('UserTenant', userTenantSchema);

module.exports = { User, UserTenant };
