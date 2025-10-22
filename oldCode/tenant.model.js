const mongoose = require('mongoose');

const tenantSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    type: {
      type: String,
      required: true,
      enum: [
        'hospital',
        'clinic',
        'independent_doctor',
        'pharmacy',
        'platform',
      ],
    },
    plan: { type: String, trim: true },
    status: {
      type: String,
      enum: ['active', 'suspended', 'deleted'],
      default: 'active',
    },
    meta: { type: mongoose.Schema.Types.Mixed },
  },
  { timestamps: true }
);

tenantSchema.index({ name: 1, type: 1 }, { unique: true });

module.exports = mongoose.model('Tenant', tenantSchema);
