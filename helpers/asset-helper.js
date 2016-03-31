'use strict';

module.exports = {
  map: function(asset) {
    var slackmessage = asset.text;
    var content = slackmessage.split(' ');

    var link = content.shift();
    var categories = [];
    content.forEach(function(item, index) {
      if(item.charAt(0) == '@') {
        categories.push(item);
      }
    });
    var tags = content.filter(function(item) {
      return categories.indexOf(item) === -1;
    });

    return {
      link   : link,
      categories: categories,
      tags : tags,
      createdBy: {
        team: {
          id: asset.team_id,
          domain: asset.team_domain
        },
        user: {
          id: asset.user_id,
          name: asset.user_name
        },
        channel: {
          id: asset.channel_id,
          name: asset.channel_name
        }
      }
    };
  }
};
