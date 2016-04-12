'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CategorySchema = new Schema({

  category: {
    type: String,
    lowercase: true,
    trim: true
  }

});

module.exports = mongoose.model('Categories', CategorySchema);
