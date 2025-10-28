const express = require('express');
const router = express.Router();
const { facilityController } = require('./../controllers');

router
  .route('/')
  .get(facilityController.getAllFacilities)
  .post(facilityController.createFacility);

router
  .route('/:id')
  .get(facilityController.getFacility)
  .put(facilityController.updateFacility)
  .delete(facilityController.deleteFacility);

module.exports = router;
