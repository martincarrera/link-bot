const suffix = Math.floor(Math.random() * Math.pow(10, 5));

module.exports = {
  text: `https://site${suffix}.com @category${suffix} tag${suffix}`,
  team_id: Math.floor(Math.random() * Math.pow(10, 9)),
  user_name: `someone${suffix}`,
  channel_id: Math.floor(Math.random() * Math.pow(10, 9)),
  suffix
};
