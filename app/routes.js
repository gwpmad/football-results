const controllers = require('./controllers');

module.exports = function(app) {
  app.get('/', controllers.home);

  app.get('/metriclist/:teamId', controllers.metricList);

  app.get('/:metric/:teamId', controllers.metric);
};
