const plResults = require('../../data/premierLeague/2015-16.json');
const { resultsArray } = require('../../lib/utils');

const sumGoalsScored = (array) => {
  let total = 0;
  array.forEach((result) =>
    total += result.scored);

  return total;
};

module.exports = (teamName) => {
  const teamResultsArray = resultsArray(teamName);
  const goals = sumGoalsScored(teamResultsArray);

  return goals;
};
