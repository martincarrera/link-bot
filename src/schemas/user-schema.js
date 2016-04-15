'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({

  slackId: String,

  username: {
    type: String,
    lowercase: true,
    trim: true,
    unique: true
  },
  team: {
    id: String,
    domain: String
  },
  password: {
    type: String,
    required: true
  },
  name: {
    first: {
      type: String,
      required: true,
      trim: true
    },
    last: {
      type: String,
      required: true,
      trim: true
    }
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    lowercase: true
  },
  createdAt: {
    at: Date,
    by: String
  },
  updatedAt: {
    at: Date,
    by: String
  }
});

UserSchema.pre('save', function (next) {
  var now = new Date();
  this.updatedAt = now;
  if (!this.createdAt) {
    this.createdAt = now;
  }
  next();
});

module.exports = mongoose.model('User', UserSchema);
