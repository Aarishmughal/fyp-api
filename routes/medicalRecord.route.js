const express = require('express');
const router = express.Router();
const { medicalRecordController } = require('./../controllers');

router
  .route('/')
  .get(medicalRecordController.getAllMedicalRecords)
  .post(medicalRecordController.createMedicalRecord);

router
  .route('/:id')
  .get(medicalRecordController.getMedicalRecord)
  .put(medicalRecordController.updateMedicalRecord)
  .delete(medicalRecordController.deleteMedicalRecord);

module.exports = router;
