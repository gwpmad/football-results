const plResults = require('../../data/premierLeague/2015-16.json');
const draws = require('./draws');
const { resultsArray } = require('../../lib/utils');

const calculateDrawPercentage = (array, teamName) =>
  Math.round((draws(teamName) / array.length) * 100);

module.exports = (teamName) => {
  const teamResultsArray = resultsArray(teamName);
  const drawPercentage = calculateDrawPercentage(teamResultsArray, teamName);

  return `${drawPercentage}%`;
};
