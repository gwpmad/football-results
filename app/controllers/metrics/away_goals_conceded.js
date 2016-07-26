const plResults = require('../../data/premierLeague/2015-16.json');
const { resultsArray } = require('../../lib/utils');

const sumAwayGoalsConceded = (array) => {
  let total = 0;
  array.forEach((result) =>
    total += result.conceded);

  return total;
};

module.exports = (teamName) => {
  const teamAwayResultsArray = resultsArray(teamName, 'away');
  const awayGoalsConceded = sumAwayGoalsConceded(teamAwayResultsArray);

  return awayGoalsConceded;
};
