const plResults = require('../../data/premierLeague/2015-16.json');
const wins = require('./wins');

const calculateWinPercentage = (array, teamName) =>
  Math.round((wins(teamName) / array.length) * 100);

module.exports = (teamName) => {
  const teamResultsArray = plResults[teamName].results;
  const winPercentage = calculateWinPercentage(teamResultsArray, teamName);

  return `${winPercentage}%`;
};
