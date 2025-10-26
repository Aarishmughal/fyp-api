const mongoose = require('mongoose');

const patientTenantSchema = new mongoose.Schema(
  {
    patient: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    tenant: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Tenant',
      required: true,
    },
    tenantMrn: { type: String, required: true }, // Medical Record Number
    status: { type: String, enum: ['active', 'discharged'], default: 'active' },
  },
  { timestamps: true }
);

const patientSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    patientCode: { type: String, required: true, unique: true },
    dob: { type: Date },
    gender: { type: String, enum: ['male', 'female', 'other'] },
    countryId: { type: String },
  },
  { timestamps: true }
);

patientSchema.index({ patientCode: 1 });
patientTenantSchema.index({ patient: 1, tenant: 1 }, { unique: true });

module.exports = mongoose.model('Patient', patientSchema);
module.exports = mongoose.model('PatientTenant', patientTenantSchema);
