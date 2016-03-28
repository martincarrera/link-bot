'use strict';

var _ = require('lodash');

module.exports = {
  map: function(asset) {
    return _.map(asset, function(a) {
      var slackmessage = a.text;
      var content = slackmessage.split(' ');
      return {
        link   : content.shift(),
        hashes : content,
        createdBy: {
          team: {
            id: a.team_id,
            domain: a.team_domain
          },
          user: {
            id: a.user_id,
            name: a.user_name
          },
          channel: {
            id: a.channel_id,
            name: a.channel_name
          }
        }
      };
    });
  }
};
