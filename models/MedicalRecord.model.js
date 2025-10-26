const mongoose = require('mongoose');

const medicalRecordSchema = new mongoose.Schema(
  {
    patient: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    doctor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    tenant: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Tenant',
      required: true,
    },
    recordType: {
      type: String,
      enum: ['lab', 'radiology', 'prescription', 'note'],
      required: true,
    },
    fileUrl: { type: String },
    description: { type: String },
    recordDated: { type: Date, required: true },
  },
  { timestamps: true }
);

medicalRecordSchema.index({ patient: 1, tenant: 1 });

module.exports = mongoose.model('MedicalRecord', medicalRecordSchema);
