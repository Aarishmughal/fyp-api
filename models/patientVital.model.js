const mongoose = require('mongoose');

const vitalTypeSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    unit: { type: String },
    normalRange: { type: String },
    description: { type: String },
  },
  { timestamps: true }
);

const patientVitalItemSchema = new mongoose.Schema(
  {
    patientVital: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'PatientVital',
      required: true,
    },
    vitalType: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'VitalType',
      required: true,
    },
    value: { type: String, required: true },
    status: { type: String, enum: ['normal', 'abnormal'], default: 'normal' },
    timestamp: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

const patientVitalSchema = new mongoose.Schema(
  {
    patient: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Patient',
      required: true,
    },
    doctor: { type: mongoose.Schema.Types.ObjectId, ref: 'Doctor' },
    nurse: { type: mongoose.Schema.Types.ObjectId, ref: 'Nurse' },
    appointment: { type: mongoose.Schema.Types.ObjectId, ref: 'Appointment' },
    tenant: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Tenant',
      required: true,
    },
    dateRecorded: { type: Date, default: Date.now },
    notes: { type: String },
  },
  { timestamps: true }
);

patientVitalSchema.index({ patient: 1, tenant: 1 });
patientVitalItemSchema.index({ patientVital: 1, vitalType: 1 });
vitalTypeSchema.index({ name: 1 });

const VitalType = mongoose.model('VitalType', vitalTypeSchema);
const PatientVitalItem = mongoose.model(
  'PatientVitalItem',
  patientVitalItemSchema
);
const PatientVital = mongoose.model('PatientVital', patientVitalSchema);

module.exports = {
  VitalType,
  PatientVitalItem,
  PatientVital,
};
