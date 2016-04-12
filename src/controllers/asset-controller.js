'use strict';

var Controller = require('../libraries/controller');
var AssetModel = require('../models/asset-model');

var AssetController = class extends Controller {
  constructor(Model) {
    super(Model);
  }

  createFromSlack(req, res, next) {
    this.model.createFromSlack(req.body)
    .then(function(doc) {
      res.status(201).json(doc);
    })
    .catch(function(err) {
      return next(err);
    });
  }
};

module.exports = new AssetController(AssetModel);
