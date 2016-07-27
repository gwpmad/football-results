const fs = require('fs');
const plResults = require('../data/premierLeague/2015-16.json');

const isNonIndexFile = (file, dir) =>
    fs.statSync(`${dir}/${file}`).isFile() && file !== 'index.js';

const resultsArray = (team, venue) => {
    const results = plResults[team].results;
    return venue ? results.filter((result) => result.location === venue)
        : results;
};

const convertJSONToTeamDict = (json) => {
  const fixtures = json.fixtures;
  const dict = {};

  fixtures.forEach((fixture) => {
    let homeTeamName = fixture['homeTeamName'];
    let awayTeamName = fixture['awayTeamName'];
    let result = fixture['result'];

    dict[homeTeamName] = dict[homeTeamName] || {
      results: [],
    };

    dict[awayTeamName] = dict[awayTeamName] || {
      results: [],
    };

    dict[homeTeamName].results.push({
      location: 'home',
      opponent: awayTeamName,
      scored: result['goalsHomeTeam'],
      conceded: result['goalsAwayTeam'],
    });

    dict[awayTeamName].results.push({
      location: 'away',
      opponent: homeTeamName,
      scored: result['goalsAwayTeam'],
      conceded: result['goalsHomeTeam'],
    });
  });

  return dict;
};

module.exports = {
    isNonIndexFile,
    resultsArray,
    convertJSONToTeamDict,
}