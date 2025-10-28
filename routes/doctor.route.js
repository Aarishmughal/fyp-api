const express = require('express');
const router = express.Router();
const { doctorController } = require('./../controllers');

router
  .route('/')
  .get(doctorController.getAllDoctors)
  .post(doctorController.createDoctor);

router
  .route('/:id')
  .get(doctorController.getDoctor)
  .put(doctorController.updateDoctor)
  .delete(doctorController.deleteDoctor);

module.exports = router;
