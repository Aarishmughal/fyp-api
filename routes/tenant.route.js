const express = require('express');
const router = express.Router();
const { tenantController } = require('./../controllers');

router
  .route('/')
  .get(tenantController.getAllTenants)
  .post(tenantController.createTenant);

router
  .route('/:id')
  .get(tenantController.getTenant)
  .put(tenantController.updateTenant)
  .delete(tenantController.deleteTenant);

module.exports = router;
