const plResults = require('../../data/premierLeague/2015-16.json');

const sumAwayPoints = (array) => {
  let total = 0;
  array.forEach((result) =>{
    if (result.scored > result.conceded) {
      total += 3;
    } else if (result.scored === result.conceded) {
      total += 1;
    }
  });

  return total;
};

module.exports = (teamName) => {
  const teamAwayResultsArray = plResults[teamName].results
    .filter((result) => result.location === 'away');
  const awayPoints = sumAwayPoints(teamAwayResultsArray);

  return awayPoints;
};
