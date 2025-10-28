const express = require('express');
const router = express.Router();
const { appointmentController } = require('./../controllers');

router
  .route('/')
  .get(appointmentController.getAllAppointments)
  .post(appointmentController.createAppointment);

router
  .route('/:id')
  .get(appointmentController.getAppointment)
  .put(appointmentController.updateAppointment)
  .delete(appointmentController.deleteAppointment);

module.exports = router;
