const plResults = require('../../data/premierLeague/2015-16.json');
const wins = require('./wins');
const { resultsArray } = require('../../lib/utils');

const calculateWinPercentage = (array, teamName) =>
  Math.round((wins(teamName) / array.length) * 100);

module.exports = (teamName) => {
  const teamResultsArray = resultsArray(teamName);
  const winPercentage = calculateWinPercentage(teamResultsArray, teamName);

  return `${winPercentage}%`;
};
