'use strict';

var Model = require('../libraries/model');
var Category = require('../schemas/category-schema');

class CategoryModel extends Model {
  constructor(SchemaModel) {
    super(SchemaModel);
  }

  findOrCreate(category){
    console.log('into findOrCreate with category ' + category);
    return this.findOne({category: category})
      .then(cat => cat ?
        Promise.resolve(cat) :
        this.create({ category })
      )
      .then(category => category._id);
  }
};

module.exports = new CategoryModel(Category);
