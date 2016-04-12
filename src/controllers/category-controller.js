'use strict';

var Controller = require('../libraries/controller');
var CategoryModel = require('../models/category-model');

var CategoryController = class extends Controller {
  constructor(Model) {
    super(Model);
  }
};

module.exports = new CategoryController(CategoryModel);
