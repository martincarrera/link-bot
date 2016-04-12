'use strict';

var router = require('express').Router();

var controllers = require('./controllers');

router.route('/slack')
  .post(controllers.asset.createFromSlack.bind(controllers.asset));

router.route('/assets')
  .get(controllers.asset.find.bind(controllers.asset))
  .post(controllers.asset.create.bind(controllers.asset));

router.route('/assets/:id')
  .get(controllers.asset.findById.bind(controllers.asset))
  .put(controllers.asset.update.bind(controllers.asset))
  .delete(controllers.asset.remove.bind(controllers.asset));

router.route('/categories')
  .get(controllers.category.find.bind(controllers.category))
  .post(controllers.category.create.bind(controllers.category));


module.exports = router;
