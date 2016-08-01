'use strict';

var Model = require('../libraries/model');
var User = require('../schemas/user-schema');

class UserModel extends Model {
  constructor(SchemaModel) {
    super(SchemaModel);
  }
}

module.exports = new UserModel(User);
