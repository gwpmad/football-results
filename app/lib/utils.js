const fs = require('fs');
const plResults = require('../data/premierLeague/2015-16.json');

const isNonIndexFile = (file, dir) =>
    fs.statSync(`${dir}/${file}`).isFile() && file !== 'index.js';

const resultsArray = (team, venue) => {
    const results = plResults[team].results;
    return venue ? results.filter((result) => result.location === venue)
        : results;
};

module.exports = {
    isNonIndexFile,
    resultsArray,
}