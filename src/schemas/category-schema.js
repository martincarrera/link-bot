'use strict';

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

module.exports = mongoose.model('Category', CategorySchema);
