const fs = require('fs');
const metrics = require('./metrics');

module.exports = (req, res, next) => {
  const { teamId } = req.params;

  const plFixtures = require('../data/premierLeague/2015-16.json');
  const metricList = Object.keys(metrics);

  res.render('metricList', { metricList, teamId })
}
