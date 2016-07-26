const plResults = require('../../data/premierLeague/2015-16.json');
const { resultsArray } = require('../../lib/utils');

const countDrawnGames = (array) => {
  const drawnGames = array.filter((result) =>
    result.scored === result.conceded);
  return drawnGames.length;
};


module.exports = (teamName) => {
  const teamResultsArray = resultsArray(teamName);
  const draws = countDrawnGames(teamResultsArray);

  return draws;
};
