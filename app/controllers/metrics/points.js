const plResults = require('../../data/premierLeague/2015-16.json');

module.exports = (teamId) => {
  const teamName = Object.keys(plResults).filter((team) =>
    plResults[team].id === Number(teamId))[0];

  

}
