const mongoose = require('mongoose');

const tenantSchema = new mongoose.Schema(
  {
    displayName: { type: String, required: true },
    type: {
      type: String,
      enum: ['hospital', 'clinic', 'lab', 'individual'],
      default: 'individual',
    },
    plan: {
      type: String,
      enum: ['free', 'pro', 'enterprise'],
      default: 'free',
    },
  },
  { timestamps: true }
);

const Tenant = mongoose.model('Tenant', tenantSchema);

module.exports = Tenant;
