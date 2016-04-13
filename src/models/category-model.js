'use strict';

var Model = require('../libraries/model');
var Category = require('../schemas/category-schema');

class CategoryModel extends Model {
  constructor(SchemaModel) {
    super(SchemaModel);
  }

  findOrCreate(categoryName) {
    return this.findOne({ name: categoryName })
      .then(category => category ?
        Promise.resolve(category) :
        this.create({ name: categoryName })
      )
      .then(category => category._id);
  }

}

module.exports = new CategoryModel(Category);
