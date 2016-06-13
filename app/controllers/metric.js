module.exports = (req, res, next) => {
  const { metric, teamId } = req.params;
  const metricStat = require(`./metrics/${metric}`)(teamId);

  res.render('metric', { metric });
}
