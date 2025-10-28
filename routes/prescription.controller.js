const express = require('express');
const router = express.Router();
const { prescriptionController } = require('./../controllers');

router
  .route('/')
  .get(prescriptionController.getAllPrescriptions)
  .post(prescriptionController.createPrescription);

router
  .route('/:id')
  .get(prescriptionController.getPrescription)
  .put(prescriptionController.updatePrescription)
  .delete(prescriptionController.deletePrescription);

module.exports = router;
