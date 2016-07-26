const plResults = require('../../data/premierLeague/2015-16.json');
const { resultsArray } = require('../../lib/utils');

const countNilNilDraws = (array) => {
  const nilNilDraws = array.filter((result) =>
    result.scored + result.conceded === 0);

  return nilNilDraws.length;
};


module.exports = (teamName) => {
  const teamResultsArray = resultsArray(teamName);
  const nilNilDraws = countNilNilDraws(teamResultsArray);

  return nilNilDraws;
};
