const plResults = require('../../data/premierLeague/2015-16.json');

const sumHomeGoalsScored = (array) => {
  let total = 0;
  array.forEach((result) =>
    total += result.scored);

  return total;
};

module.exports = (teamName) => {
  const teamHomeResultsArray = plResults[teamName].results
    .filter((result) => result.location === 'home');
  const homeGoals = sumHomeGoalsScored(teamHomeResultsArray);

  return homeGoals;
};
