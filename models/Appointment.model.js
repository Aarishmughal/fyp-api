const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema(
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
    facility: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Facility',
      required: true,
    },
    scheduledFor: { type: Date, required: true },
    status: {
      type: String,
      enum: ['scheduled', 'completed', 'cancelled'],
      default: 'scheduled',
    },
    notes: { type: String },
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

appointmentSchema.index({ doctor: 1, scheduledFor: 1 });
appointmentSchema.index({ patient: 1, scheduledFor: 1 });

const Appointment = mongoose.model('Appointment', appointmentSchema);

module.exports = Appointment;
