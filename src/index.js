'use strict';
var mongoose = require('mongoose');
var config = require('./config/config');

var app = require('./app')(mongoose);

app.listen(config.PORT);
console.log(`Listening to port ${config.PORT}`);
