const factory = require('./../utils/handlerFactory');
const { Appointment } = require('./../models');

exports.getAllAppointments = factory.getAll(Appointment);
exports.getAppointment = factory.getOne(Appointment);
exports.createAppointment = factory.createOne(Appointment);
exports.updateAppointment = factory.updateOne(Appointment);
exports.deleteAppointment = factory.deleteOne(Appointment);
