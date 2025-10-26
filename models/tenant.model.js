// models/Tenant.js
const mongoose = require('mongoose');

const tenantSchema = new mongoose.Schema(
  {
    displayName: { type: String, required: true },
    type: {
      type: String,
      enum: ['hospital', 'clinic', 'lab', 'individual', 'other'],
      default: 'other',
    },
    status: { type: String, enum: ['active', 'suspended'], default: 'active' },
    plan: {
      type: String,
      enum: ['free', 'pro', 'enterprise'],
      default: 'free',
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Tenant', tenantSchema);
