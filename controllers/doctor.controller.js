const factory = require('./../utils/handlerFactory');
const { Doctor } = require('./../models');

exports.getAllDoctors = factory.getAll(Doctor);
exports.getDoctor = factory.getOne(Doctor);
exports.createDoctor = factory.createOne(Doctor);
exports.updateDoctor = factory.updateOne(Doctor);
exports.deleteDoctor = factory.deleteOne(Doctor);
