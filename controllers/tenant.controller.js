const factory = require('./../utils/handlerFactory');
const { Tenant } = require('./../models');

exports.getAllTenants = factory.getAll(Tenant);
exports.getTenant = factory.getOne(Tenant);
exports.createTenant = factory.createOne(Tenant);
exports.updateTenant = factory.updateOne(Tenant);
exports.deleteTenant = factory.deleteOne(Tenant);
