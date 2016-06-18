const plResults = require('../../data/premierLeague/2015-16.json');

const countNilNilDraws = (array) => {
  const nilNilDraws = array.filter((result) =>
    result.scored + result.conceded === 0);

  return nilNilDraws.length;
};


module.exports = (teamName) => {
  const teamResultsArray = plResults[teamName].results;
  const nilNilDraws = countNilNilDraws(teamResultsArray);

  return nilNilDraws;
};
