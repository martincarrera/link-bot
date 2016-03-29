'use strict';

module.exports = {
  map: function(asset) {
    var slackmessage = asset.text;
    var content = slackmessage.split(' ');

    return {
      link   : content.shift(),
      tags : content,
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
