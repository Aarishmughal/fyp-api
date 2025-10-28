const mongoose = require('mongoose');

const nurseSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    tenant: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Tenant',
      required: true,
    },
    licenseNumber: { type: String },
    status: { type: String, enum: ['active', 'inactive'], default: 'active' },
  },
  { timestamps: true }
);

nurseSchema.index({ tenant: 1, user: 1 }, { unique: true });

const Nurse = mongoose.model('Nurse', nurseSchema);

module.exports = Nurse;
