const mongoose = require('mongoose');

const invoiceItemSchema = new mongoose.Schema(
  {
    invoice: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Invoice',
      required: true,
    },
    description: { type: String, required: true },
    quantity: { type: Number, required: true, default: 1 },
    unitPrice: { type: Number, required: true },
    totalPrice: { type: Number, required: true },
  },
  { timestamps: true }
);

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

invoiceItemSchema.index({ invoice: 1 });
invoiceSchema.index({ tenant: 1, patient: 1, doctor: 1 });

const InvoiceItem = mongoose.model('InvoiceItem', invoiceItemSchema);
const Invoice = mongoose.model('Invoice', invoiceSchema);

module.exports = { Invoice, InvoiceItem };
