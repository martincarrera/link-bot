'use strict';

module.exports = {
  map: function (asset) {
    var slackmessage = asset.text;
    var content = slackmessage.split(' ');

    var link = content.shift();

    const cleanedLink = link
      .replace(/^https?:\/\//ig, '')
      .replace(/www\./, '')
      .replace(/(?=\?).*/, '');

    var text = cleanedLink.length > 30 ?
      cleanedLink.substr(0, 27).concat('...') :
      cleanedLink;

    // get categories and tags removing duplicates
    var reducedContent = { categories: [], tags: [] };
    reducedContent = content.reduce((x, y) => {
      var category = y.charAt(0) === '@' && y.substr(1, y.length);
      if (!category && x.tags.indexOf(y) === -1) x.tags.push(y);
      else if (!!category && x.categories.indexOf(category) === -1) x.categories.push(category);
      return {
        categories: x.categories,
        tags: x.tags
      };
    }, reducedContent);

    return {
      link: link,
      text: text,
      categories: reducedContent.categories,
      tags: reducedContent.tags,
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
