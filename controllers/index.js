const appointmentController = require('./appointment.controller');
const authController = require('./auth.controller');
const doctorController = require('./doctor.controller');
const facilityController = require('./facility.controller');
const invoiceController = require('./invoice.controller');
const medicalRecordController = require('./medicalRecord.controller');
const nurseController = require('./nurse.controller');
const patientController = require('./patient.controller');
const prescriptionController = require('./prescription.controller');
const userController = require('./user.controller');
const tenantController = require('./tenant.controller');

module.exports = {
  appointmentController,
  authController,
  doctorController,
  facilityController,
  invoiceController,
  medicalRecordController,
  nurseController,
  patientController,
  prescriptionController,
  userController,
  tenantController,
};
