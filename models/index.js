const mongoose = require('mongoose');

const connectMongo = async (DB_URI) => {
  if (mongoose.connection.readyState === 1) return mongoose.connection;
  await mongoose.connect(DB_URI, {
    autoIndex: true,
  });
  return mongoose.connection;
};

const { User, UserTenant } = require('./User.model');
const AuthAccount = require('./AuthAccount.model');
const Invoice = require('./Invoice.model');
const MedicalRecord = require('./MedicalRecord.model');
const Tenant = require('./Tenant.model');
const { Doctor, DoctorPatient } = require('./Doctor.model');
const Nurse = require('./Nurse.model');
const { Prescription, PrescriptionItem } = require('./Prescription.model');
const Patient = require('./Patient.model');
const Appointment = require('./Appointment.model');

module.exports = {
  connectMongo,
  User,
  UserTenant,
  AuthAccount,
  Invoice,
  MedicalRecord,
  Tenant,
  Doctor,
  Nurse,
  Prescription,
  Patient,
  Appointment,
};
