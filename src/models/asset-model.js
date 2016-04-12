'use strict';

var assetHelper = require('../helpers/asset-helper');

var Model = require('../libraries/model');
var Asset = require('../schemas/asset-schema');

var AssetModel = class extends Model {
  constructor(SchemaModel) {
    super(SchemaModel);
  }

  createFromSlack(input) {
   var newSchemaModel = new this.SchemaModel(assetHelper.map(input));
   if(!input.text) {
     return Promise.resolve({
       text: 'See your saved links in http://js-tank.github.io/links-front/'
     });
   }
   return newSchemaModel.saveAsync().then(function(doc) {
     return {
       'response_type': 'in_channel',
       text: 'The link ' + doc.link + ' was added successfully by ' + doc.createdBy.user.name
     };
   });
 }
};

module.exports = new AssetModel(Asset);
