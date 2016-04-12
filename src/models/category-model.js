'use strict';

var Model = require('../libraries/model');
var Category = require('../schemas/category-schema');

var CategoryModel = class extends Model {
  constructor(SchemaModel) {
    super(SchemaModel);
  }
};

module.exports = new CategoryModel(Category);
