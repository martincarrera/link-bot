'use strict';

var colorHelper = require('../helpers/color-helper');

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CategorySchema = new Schema({

  name: {
    unique: true,
    type: String,
    lowercase: true,
    trim: true
  },

  color: {
    type: String,
    lowercase: true,
    trim: true
  }

});

CategorySchema.pre('save', function(next) {
  if (!this.color) {
    this.color = colorHelper.randomColor();
  }
  next();
});

module.exports = mongoose.model('Category', CategorySchema);
