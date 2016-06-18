const changeCase = require('change-case');
const metrics = require('./metrics');

module.exports = (req, res, next) => {
  const { teamId } = req.params;
  const metricList = Object.keys(metrics).map(metric => ({
    metric,
    metricSentenceCase: changeCase.sentenceCase(metric),
  }));

  res.render('metricList', { metricList, teamId });
};
