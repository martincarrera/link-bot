'use strict';

var router = require('express').Router();

var controllers = require('./controllers');

router.route('/')
  .post(controllers.asset.create.bind(controllers.asset))
  .get(controllers.asset.find.bind(controllers.asset));

router.route('/:id')
  .get(controllers.asset.findById.bind(controllers.asset))
  .put(controllers.asset.update.bind(controllers.asset))
  .delete(controllers.asset.remove.bind(controllers.asset));

module.exports = router;
