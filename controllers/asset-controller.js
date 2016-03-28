'use strict';

var Controller = require('../libraries/controller');
var AssetModel = require('../models/asset-model');

var AssetController = class extends Controller {
  constructor(Model) {
    super(Model);
  }
};

module.exports = new AssetController(AssetModel);
