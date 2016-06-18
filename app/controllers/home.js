module.exports = (req, res) => {
  const plResults = require('../data/premierLeague/2015-16.json');
  const teams = Object.keys(plResults).map((team) => ({
    teamName: team,
    teamId: plResults[team].id,
  }));
  
  res.render('home', { teams });
};
