'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AssetSchema = new Schema({

  link: {
    type: String,
    lowercase: true,
    trim: true
  },

  tags: [{
    type: String,
    lowercase: true,
    trim: true
  }],

  createdBy: {
    team: {
      id: String,
      domain: String,
    },
    channel: {
      id: String,
      name: String,
    },
    user: {
      id: String,
      name: String
    }
  },

  command: {
    type: String
  },

  createdAt: {
    type: Date,
    default: Date.now
  },

  updatedAt: {
    type: Date,
    default: Date.now
  }

});

AssetSchema.pre('save', function(next) {
  var now = new Date();
  this.updatedAt = now;
  if (!this.createdAt) {
    this.createdAt = now;
  }
  next();
});

module.exports = mongoose.model('Assets', AssetSchema);
