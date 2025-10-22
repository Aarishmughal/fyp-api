const mongoose = require('mongoose');

const tenantSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      refPath: 'User',
      required: true,
    },
    displayName: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ['active', 'inactive'],
      default: 'active',
      required: true,
    },
    type: {
      type: String,
      enum: ['individual', 'company'],
      default: 'individual',
      required: true,
    },
    plan: {
      type: String,
      enum: ['free', 'basic', 'premium'],
      default: 'free',
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Tenant = mongoose.model('Tenant', tenantSchema);

module.exports = Tenant;
