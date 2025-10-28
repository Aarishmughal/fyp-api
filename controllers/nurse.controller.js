const factory = require('./../utils/handlerFactory');
const { Nurse } = require('./../models');

exports.getAllNurses = factory.getAll(Nurse);
exports.getNurse = factory.getOne(Nurse);
exports.createNurse = factory.createOne(Nurse);
exports.updateNurse = factory.updateOne(Nurse);
exports.deleteNurse = factory.deleteOne(Nurse);
