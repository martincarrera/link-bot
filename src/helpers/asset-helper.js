'use strict';

module.exports = {
  map: function(asset) {
    var slackmessage = asset.text;
    var content = slackmessage.split(' ');

    var link = content.shift();
    var categories = content.filter(x => x.charAt(0) == '@');

    // remove categories from the array of tags.
    var tags = content.filter(item => categories.indexOf(item) === -1);

    // remove @ of categories.
    categories.forEach((item, index) => {
      categories[index] = item.substr(1, item.length);
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
