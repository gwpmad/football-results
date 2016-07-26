const plResults = require('../../data/premierLeague/2015-16.json');
const { resultsArray } = require('../../lib/utils');

const sumGoalsConceded = (array) => {
  let total = 0;
  array.forEach((result) =>
    total += result.conceded);

  return total;
};

module.exports = (teamName) => {
  const teamResultsArray = resultsArray(teamName);
  const goalsConceded = sumGoalsConceded(teamResultsArray);

  return goalsConceded;
};
