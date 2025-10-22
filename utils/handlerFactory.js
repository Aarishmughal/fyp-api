const handleAsync = require("./handleAsync");
const AppError = require("./AppError");

exports.getAll = (Model) =>
  handleAsync(async (req, res, next) => {
    const docs = await Model.find();
    if (!docs) {
      return next(new AppError("No documents found at that Resource", 404));
    }
    res.status(200).json({
      status: "success",
      results: docs.length,
      data: docs,
    });
  });

exports.getOne = (Model) =>
  handleAsync(async (req, res, next) => {
    const doc = await Model.findById(req.params.id);
    if (!doc) {
      return next(new AppError("No document found with that ID", 404));
    }
    res.status(200).json({
      status: "success",
      data: doc,
    });
  });

exports.createOne = (Model) =>
  handleAsync(async (req, res, next) => {
    const doc = await Model.create(req.body);
    if (!doc) {
      return next(new AppError("Document could not be created", 400));
    }
    res.status(201).json({
      status: "success",
      data: doc,
    });
  });

exports.updateOne = (Model) =>
  handleAsync(async (req, res, next) => {
    const doc = await Model.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!doc) {
      return next(new AppError("No document found with that ID", 404));
    }
    res.status(200).json({
      status: "success",
      data: doc,
    });
  });

exports.deleteOne = (Model) =>
  handleAsync(async (req, res, next) => {
    const doc = await Model.findByIdAndDelete(req.params.id);
    if (!doc) {
      return next(new AppError("No document found with that ID", 404));
    }
    res.status(204).json({
      status: "success",
      data: null,
    });
  });
