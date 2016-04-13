'use strict';

var Controller = require('../libraries/controller');
var AssetModel = require('../models/asset-model');

class AssetController extends Controller {
  constructor(Model) {
    super(Model);
  }

  createFromSlack(req, res, next) {
    this.model.createFromSlack(req.body)
      .then(doc => {
        res.status(201).json(doc);
      })
      .catch(err => {
        return next(err);
      });
  }
};

module.exports = new AssetController(AssetModel);
