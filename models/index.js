const mongoose = require('mongoose');

const connectMongo = async (DB_URI) => {
  if (mongoose.connection.readyState === 1) return mongoose.connection;
  await mongoose.connect(DB_URI, {
    autoIndex: true,
  });
  return mongoose.connection;
};

const Appointment = require('./Appointment.model');
const AuthAccount = require('./AuthAccount.model');
const { Doctor, DoctorPatient } = require('./Doctor.model');
const Facility = require('./Facility.model');
const { Invoice, InvoiceItem } = require('./Invoice.model');
const MedicalRecord = require('./MedicalRecord.model');
const Nurse = require('./Nurse.model');
const { Patient, PatientTenant } = require('./Patient.model');
const { PatientVitalItem, PatientVital } = require('./PatientVital.model');
const { Prescription, PrescriptionItem } = require('./Prescription.model');
const Tenant = require('./Tenant.model');
const { User, UserTenant } = require('./User.model');

module.exports = {
  connectMongo,
  Appointment,
  AuthAccount,
  Doctor,
  DoctorPatient,
  Facility,
  Invoice,
  InvoiceItem,
  MedicalRecord,
  Nurse,
  Patient,
  PatientTenant,
  PatientVital,
  PatientVitalItem,
  Prescription,
  PrescriptionItem,
  Tenant,
  User,
  UserTenant,
};
