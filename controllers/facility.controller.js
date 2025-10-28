const factory = require('./../utils/handlerFactory');
const { Facilty } = require('./../models');

exports.getAllFaciltys = factory.getAll(Facilty);
exports.getFacilty = factory.getOne(Facilty);
exports.createFacilty = factory.createOne(Facilty);
exports.updateFacilty = factory.updateOne(Facilty);
exports.deleteFacilty = factory.deleteOne(Facilty);
