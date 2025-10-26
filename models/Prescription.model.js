const mongoose = require('mongoose');
const prescriptionItemSchema = new mongoose.Schema(
  {
    prescription: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Prescription',
      required: true,
    },
    medicineName: { type: String, required: true },
    dosage: { type: String },
    duration: { type: String },
    notes: { type: String },
  },
  { timestamps: true }
);
const prescriptionSchema = new mongoose.Schema(
  {
    doctor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Doctor',
      required: true,
    },
    patient: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Patient',
      required: true,
    },
    appointment: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Appointment',
      required: true,
    },
    tenant: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Tenant',
      required: true,
    },
    dateIssued: { type: Date, default: Date.now },
    notes: { type: String },
  },
  { timestamps: true }
);

prescriptionSchema.index({ doctor: 1, patient: 1, appointment: 1 });
prescriptionItemSchema.index({ prescription: 1 });

module.exports = mongoose.model('PrescriptionItem', prescriptionItemSchema);
module.exports = mongoose.model('Prescription', prescriptionSchema);
