'use strict';

var router = require('express').Router(); // eslint-disable-line new-cap

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

router.route('/categories/:id')
  .get(controllers.category.findById.bind(controllers.category))
  .put(controllers.category.update.bind(controllers.category))
  .delete(controllers.category.remove.bind(controllers.category));

router.route('/users')
  .get(controllers.user.find.bind(controllers.user))
  .post(controllers.user.create.bind(controllers.user));

router.route('/users/:id')
  .get(controllers.user.findById.bind(controllers.user))
  .put(controllers.user.update.bind(controllers.user))
  .delete(controllers.user.remove.bind(controllers.user));

module.exports = router;
