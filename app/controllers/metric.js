module.exports = (req, res) => {
  const { metric, teamId } = req.params;
  console.log('require(`./metrics/${metric}`)(teamId);', require(`./metrics/${metric}`)(teamId))
  const { metricStat, teamName } = require(`./metrics/${metric}`)(teamId);

  res.render('metric', { metric, metricStat, teamName });
};
