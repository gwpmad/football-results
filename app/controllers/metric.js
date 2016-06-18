const changeCase = require('change-case');
const plResults = require('../data/premierLeague/2015-16.json');

module.exports = (req, res) => {
  const { metric, teamId } = req.params;
  const metricSentenceCase = changeCase.sentenceCase(metric);
  const teamName = Object.keys(plResults).filter(team =>
    plResults[team].id === Number(teamId)
  )[0];
  const metricStat = require(`./metrics/${metric}`)(teamName);

  res.render('metric', { metricSentenceCase, metricStat, teamName });
};
