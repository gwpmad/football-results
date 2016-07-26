const plResults = require('../../data/premierLeague/2015-16.json');
const { resultsArray } = require('../../lib/utils');

const countWonGames = (array) => {
  const wonGames = array.filter((result) =>
    result.scored > result.conceded);

  return wonGames.length;
};


module.exports = (teamName) => {
  const teamResultsArray = resultsArray(teamName);
  const wins = countWonGames(teamResultsArray);

  return wins;
};
