'use strict';

var router = require('express').Router();

var controllers = require('./controllers');

router.route('/')
  .post(controllers.asset.create.bind(controllers.asset))
  .get(controllers.asset.find.bind(controllers.asset));

module.exports = router;
