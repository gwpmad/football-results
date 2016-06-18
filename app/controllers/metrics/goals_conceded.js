const plResults = require('../../data/premierLeague/2015-16.json');

const sumGoalsConceded = (array) => {
  let total = 0;
  array.forEach((result) =>
    total += result.conceded);

  return total;
};

module.exports = (teamName) => {
  const teamResultsArray = plResults[teamName].results;
  const goalsConceded = sumGoalsConceded(teamResultsArray);

  return goalsConceded;
};
