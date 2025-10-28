const factory = require('./../utils/handlerFactory');
const { Prescription } = require('./../models');

exports.getAllPrescriptions = factory.getAll(Prescription);
exports.getPrescription = factory.getOne(Prescription);
exports.createPrescription = factory.createOne(Prescription);
exports.updatePrescription = factory.updateOne(Prescription);
exports.deletePrescription = factory.deleteOne(Prescription);
