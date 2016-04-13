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
        this.create({ name: category, color: this.generateRandomColor() })
      )
      .then(category => category._id);
  }

  generateRandomColor(){
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }
};

module.exports = new CategoryModel(Category);
