'use strict';

var Controller = require('../libraries/controller');
var UserModel = require('../models/user-model');

class UserController extends Controller {
  constructor(Model) {
    super(Model);
  }
}

module.exports = new UserController(UserModel);
