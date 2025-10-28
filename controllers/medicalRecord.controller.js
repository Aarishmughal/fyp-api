const factory = require('./../utils/handlerFactory');
const { MedicalRecord } = require('./../models');

exports.getAllMedicalRecords = factory.getAll(MedicalRecord);
exports.getMedicalRecord = factory.getOne(MedicalRecord);
exports.createMedicalRecord = factory.createOne(MedicalRecord);
exports.updateMedicalRecord = factory.updateOne(MedicalRecord);
exports.deleteMedicalRecord = factory.deleteOne(MedicalRecord);
