const plResults = require('../../data/premierLeague/2015-16.json');
const { resultsArray } = require('../../lib/utils');


const sumAwayGoalsScored = (array) => {
  let total = 0;
  array.forEach((result) =>
    total += result.scored);

  return total;
};

module.exports = (teamName) => {
  const teamAwayResultsArray = resultsArray(teamName, 'away');
  const awayGoals = sumAwayGoalsScored(teamAwayResultsArray);

  return awayGoals;
};
