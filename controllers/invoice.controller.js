const factory = require('../utils/handlerFactory');
const { Invoice } = require('../models');

exports.getAllInvoices = factory.getAll(Invoice);
exports.getInvoice = factory.getOne(Invoice);
exports.createInvoice = factory.createOne(Invoice);
exports.updateInvoice = factory.updateOne(Invoice);
exports.deleteInvoice = factory.deleteOne(Invoice);
