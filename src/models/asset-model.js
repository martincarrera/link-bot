'use strict';

var assetHelper = require('../helpers/asset-helper');

var Model = require('../libraries/model');
var Asset = require('../schemas/asset-schema');

var Category = require('../models/category-model');

class AssetModel extends Model {
  constructor(SchemaModel) {
    super(SchemaModel);
  }

  createFromSlack(input) {
    if (!input.text) {
      return Promise.resolve({
        text: 'See your saved links in http://js-tank.github.io/links-front/'
      });
    }

    var asset = assetHelper.map(input);
    var categoriesPromise = asset.categories.map(category => {
      return Category.findOrCreate(category);
    });

    return Promise.all(categoriesPromise)
    .then(categories => {
      asset.categories = categories;
      var newSchemaModel = new this.SchemaModel(asset);
      return newSchemaModel.saveAsync();
    })
    .then(doc => (
      {
        response_type: 'in_channel',
        text: 'The link ' + doc.link + ' was added successfully by ' + doc.createdBy.user.name
      }
    ));
  }

}

module.exports = new AssetModel(Asset);
