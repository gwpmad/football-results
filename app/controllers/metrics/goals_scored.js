const plResults = require('../../data/premierLeague/2015-16.json');

const sumGoalsScored = (array) => {
  let total = 0;
  array.forEach((result) =>
    total += result.scored);

  return total;
};

module.exports = (teamName) => {
  const teamResultsArray = plResults[teamName].results;
  const goals = sumGoalsScored(teamResultsArray);

  return goals;
};
