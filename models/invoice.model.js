const mongoose = require('mongoose');

const invoiceSchema = new mongoose.Schema(
  {
    tenant: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Tenant',
      required: true,
    },
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
    appointment: { type: mongoose.Schema.Types.ObjectId, ref: 'Appointment' }, // if you add one later
    amount: { type: Number, required: true },
    status: {
      type: String,
      enum: ['pending', 'paid', 'cancelled'],
      default: 'pending',
    },
    issuedDate: { type: Date, default: Date.now },
    dueDate: { type: Date },
    paymentMethod: { type: String },
    notes: { type: String },
  },
  { timestamps: true }
);

invoiceSchema.index({ tenant: 1, patient: 1, doctor: 1 });

module.exports = mongoose.model('Invoice', invoiceSchema);
