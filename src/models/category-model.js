'use strict';

var Model = require('../libraries/model');
var Category = require('../schemas/category-schema');

class CategoryModel extends Model {
  constructor(SchemaModel) {
    super(SchemaModel);
  }

  findOrCreate(category){
    return this.findOne({name: category})
      .then(cat => cat ?
        Promise.resolve(cat) :
        this.create({ category })
      )
      .then(category => category._id);
  }
};

module.exports = new CategoryModel(Category);
