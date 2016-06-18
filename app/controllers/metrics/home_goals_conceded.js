const plResults = require('../../data/premierLeague/2015-16.json');

const sumHomeGoalsConceded = (array) => {
  let total = 0;
  array.forEach((result) =>
    total += result.conceded);

  return total;
};

module.exports = (teamName) => {
  const teamHomeResultsArray = plResults[teamName].results
    .filter((result) => result.location === 'home');
  const homeGoalsConceded = sumHomeGoalsConceded(teamHomeResultsArray);

  return homeGoalsConceded;
};
