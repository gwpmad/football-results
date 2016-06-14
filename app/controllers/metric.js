module.exports = (req, res) => {
  const { teamId } = req.params;
  let { metric } = req.params;
  const { metricStat, teamName } = require(`./metrics/${metric}`)(teamId);
  metric = metric[0].toUpperCase() + metric.slice(1);

  res.render('metric', { metric, metricStat, teamName });
};
