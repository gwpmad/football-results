module.exports = (req, res) => {
  const plResults = require('../data/premierLeague/2015-16.json');
  const teamNames = Object.keys(plResults);
  res.render('home', { teamNames });
};
