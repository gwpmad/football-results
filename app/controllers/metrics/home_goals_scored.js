const plResults = require('../../data/premierLeague/2015-16.json');
const { resultsArray } = require('../../lib/utils');

const sumHomeGoalsScored = (array) => {
  let total = 0;
  array.forEach((result) =>
    total += result.scored);

  return total;
};

module.exports = (teamName) => {
  const teamHomeResultsArray = resultsArray(teamName, 'home');
  const homeGoals = sumHomeGoalsScored(teamHomeResultsArray);

  return homeGoals;
};
