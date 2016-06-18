const plResults = require('../../data/premierLeague/2015-16.json');

const sumAwayGoalsScored = (array) => {
  let total = 0;
  array.forEach((result) =>
    total += result.scored);

  return total;
};

module.exports = (teamName) => {
  const teamAwayResultsArray = plResults[teamName].results
    .filter((result) => result.location === 'away');
  const awayGoals = sumAwayGoalsScored(teamAwayResultsArray);

  return awayGoals;
};
