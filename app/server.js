process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var	express = require('./config/express');
var config = require('./config');
var app = express();

app.listen(config.port, () =>
  console.log(`${process.env.NODE_ENV} server running at http://localhost: ${config.port}`)
);

module.exports = app;
