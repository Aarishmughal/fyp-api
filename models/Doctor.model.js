const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    licenseNumber: { type: String, required: true, unique: true },
    specialization: { type: String },
    signatureUrl: { type: String },
  },
  { timestamps: true }
);

doctorSchema.index({ licenseNumber: 1 });

const doctorPatientSchema = new mongoose.Schema(
  {
    doctor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
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
    relationship: {
      type: String,
      enum: ['primary', 'consulting', 'assistant'],
      default: 'primary',
    },
    status: { type: String, enum: ['active', 'ended'], default: 'active' },
  },
  { timestamps: true }
);

doctorPatientSchema.index(
  { doctor: 1, patient: 1, tenant: 1 },
  { unique: true }
);

const Doctor = mongoose.model('Doctor', doctorSchema);
const DoctorPatient = mongoose.model('DoctorPatient', doctorPatientSchema);

module.exports = { Doctor, DoctorPatient };
