const factory = require('./../utils/handlerFactory');
const { Facility } = require('./../models');

exports.getAllFacilities = factory.getAll(Facility);
exports.getFacility = factory.getOne(Facility);
exports.createFacility = factory.createOne(Facility);
exports.updateFacility = factory.updateOne(Facility);
exports.deleteFacility = factory.deleteOne(Facility);
