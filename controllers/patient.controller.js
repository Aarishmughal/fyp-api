const factory = require('./../utils/handlerFactory');
const { Patient } = require('./../models');

exports.getAllPatients = factory.getAll(Patient);
exports.getPatient = factory.getOne(Patient);
exports.createPatient = factory.createOne(Patient);
exports.updatePatient = factory.updateOne(Patient);
exports.deletePatient = factory.deleteOne(Patient);
