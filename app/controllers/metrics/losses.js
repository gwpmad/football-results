const plResults = require('../../data/premierLeague/2015-16.json');

const countLostGames = (array) => {
  const lostGames = array.filter((result) =>
    result.scored < result.conceded);

  return lostGames.length;
};


module.exports = (teamName) => {
  const teamResultsArray = plResults[teamName].results;
  const losses = countLostGames(teamResultsArray);

  return losses;
};
