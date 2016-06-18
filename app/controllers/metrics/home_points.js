const plResults = require('../../data/premierLeague/2015-16.json');

const sumHomePoints = (array) => {
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
  const teamHomeResultsArray = plResults[teamName].results
    .filter((result) => result.location === 'home');
  const homePoints = sumHomePoints(teamHomeResultsArray);

  return homePoints;
};
