const express = require('express');
const router = express.Router();
const { patientController } = require('./../controllers');

router
  .route('/')
  .get(patientController.getAllPatients)
  .post(patientController.createPatient);

router
  .route('/:id')
  .get(patientController.getPatient)
  .put(patientController.updatePatient)
  .delete(patientController.deletePatient);

module.exports = router;
