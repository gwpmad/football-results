const plResults = require('../../data/premierLeague/2015-16.json');
const { resultsArray } = require('../../lib/utils');

const sumPoints = (array) =>
  array.reduce((memo, result) => {
    let { scored, conceded } = result;
    if (scored > conceded) {
      return memo + 3;
    } else if (scored === conceded) {
      return memo + 1;
    }
    return memo;
  },0);


module.exports = (teamName) => {
  const teamResultsArray = resultsArray(teamName);
  const points = sumPoints(teamResultsArray);

  return points;
};
