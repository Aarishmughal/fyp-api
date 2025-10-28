const express = require('express');
const router = express.Router();
const { invoiceController } = require('./../controllers');

router
  .route('/')
  .get(invoiceController.getAllInvoices)
  .post(invoiceController.createInvoice);

router
  .route('/:id')
  .get(invoiceController.getInvoice)
  .put(invoiceController.updateInvoice)
  .delete(invoiceController.deleteInvoice);

module.exports = router;
