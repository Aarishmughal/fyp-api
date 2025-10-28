const express = require('express');
const router = express.Router();
const { nurseController } = require('./../controllers');

router
  .route('/')
  .get(nurseController.getAllNurses)
  .post(nurseController.createNurse);

router
  .route('/:id')
  .get(nurseController.getNurse)
  .put(nurseController.updateNurse)
  .delete(nurseController.deleteNurse);

module.exports = router;
