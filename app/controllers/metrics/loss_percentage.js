const plResults = require('../../data/premierLeague/2015-16.json');
const losses = require('./losses');

const calculateLossPercentage = (array, teamName) =>
  Math.round((losses(teamName) / array.length) * 100);

module.exports = (teamName) => {
  const teamResultsArray = plResults[teamName].results;
  const lossPercentage = calculateLossPercentage(teamResultsArray, teamName);

  return `${lossPercentage}%`;
};
