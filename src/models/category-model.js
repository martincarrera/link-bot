'use strict';

var Model = require('../libraries/model');
var Category = require('../schemas/category-schema');

var CategoryModel = class extends Model {
  constructor(SchemaModel) {
    super(SchemaModel);
  }

  findOrCreate(category){
    var self = this;
    console.log('into findOrCreate with category ' + category);
    return this.findOne({category: category})
    .then(function(cat){
      return cat ? Promise.resolve(cat) : self.create({category: category});
    })
    .then(function(category) {
      return category._id;
    });
  }
};

module.exports = new CategoryModel(Category);
