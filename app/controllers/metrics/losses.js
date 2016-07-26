const plResults = require('../../data/premierLeague/2015-16.json');
const { resultsArray } = require('../../lib/utils');

const countLostGames = (array) => {
  const lostGames = array.filter((result) =>
    result.scored < result.conceded);

  return lostGames.length;
};


module.exports = (teamName) => {
  const teamResultsArray = resultsArray(teamName);
  const losses = countLostGames(teamResultsArray);

  return losses;
};
