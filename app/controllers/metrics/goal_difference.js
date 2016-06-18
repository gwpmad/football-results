const plResults = require('../../data/premierLeague/2015-16.json');
const goalsScored = require('./goals_scored');
const goalsConceded = require('./goals_conceded');

module.exports = (teamName) => {
  const goalDifference = goalsScored(teamName) - goalsConceded(teamName);
  return goalDifference;
};
