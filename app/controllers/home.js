const fs = require('fs');

module.exports = (req, res, next) => {
  const plResults = require('../data/premierLeague/2015-16.json');
  const teamNames = Object.keys(plResults);
  res.render('home', { teamNames })
}
