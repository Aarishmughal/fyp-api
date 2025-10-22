const mongoose = require('mongoose');

const vitalType = new mongoose.Schema({
  name: { type: String, required: true },
  unit: { type: String, required: true },
  normalRange: { type: String, required: true },
  description: { type: String },
});
const VitalType = mongoose.model('VitalType', vitalType);

const patientVitalItemSchema = new mongoose.Schema({
  vitalType: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'VitalType',
    required: true,
  },
  value: { type: Number, required: true },
  status: { type: String, enum: ['normal', 'abnormal'], required: true },
  recordedAt: { type: Date, default: Date.now },
});
const PatientVitalItem = mongoose.model(
  'PatientVitalItem',
  patientVitalItemSchema
);

const patientVitalSchema = new mongoose.Schema({
  patient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Patient',
    required: true,
  },
  doctor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Doctor',
    required: true,
  },
  nurse: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Nurse',
    required: true,
  },
  appointment: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Appointment',
    required: true,
  },
  notes: { type: String },
  recordedAt: { type: Date, default: Date.now },
});

const PatientVital = mongoose.model('PatientVital', patientVitalSchema);

module.exports = {
  VitalType,
  PatientVitalItem,
  PatientVital,
};
