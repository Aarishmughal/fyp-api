const express = require('express');

const router = express.Router();

const appointmentRouter = require('./appointment.route');
const doctorRouter = require('./doctor.route');
const facilityRouter = require('./facility.route');
const invoiceRouter = require('./invoice.route');
const medicalRecordRouter = require('./medicalRecord.route');
const nurseRouter = require('./nurse.route');
const patientRouter = require('./patient.route');
const prescriptionRouter = require('./prescription.route');
const tenantRouter = require('./tenant.route');
const userRouter = require('./user.route');
const authRouter = require('./auth.route');

router.use('/appointments', appointmentRouter);
router.use('/doctors', doctorRouter);
router.use('/facilities', facilityRouter);
router.use('/invoices', invoiceRouter);
router.use('/medicalRecords', medicalRecordRouter);
router.use('/nurses', nurseRouter);
router.use('/patients', patientRouter);
router.use('/prescriptions', prescriptionRouter);
router.use('/tenants', tenantRouter);
router.use('/users', userRouter);

// router.use('/auth', authRouter);

module.exports = router;
