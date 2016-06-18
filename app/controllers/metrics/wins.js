const plResults = require('../../data/premierLeague/2015-16.json');

const countWonGames = (array) => {
  const wonGames = array.filter((result) =>
    result.scored > result.conceded);

  return wonGames.length;
};


module.exports = (teamName) => {
  const teamResultsArray = plResults[teamName].results;
  const wins = countWonGames(teamResultsArray);

  return wins;
};
