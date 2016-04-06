var mockgoose = require('mockgoose');
var mongoose = require('mongoose');
mockgoose(mongoose);

var app = require('../app.js')(mongoose);

module.exports = app;
