const plResults = require('../../data/premierLeague/2015-16.json');
const losses = require('./losses');
const { resultsArray } = require('../../lib/utils');

const calculateLossPercentage = (array, teamName) =>
  Math.round((losses(teamName) / array.length) * 100);

module.exports = (teamName) => {
  const teamResultsArray = resultsArray(teamName);
  const lossPercentage = calculateLossPercentage(teamResultsArray, teamName);

  return `${lossPercentage}%`;
};
