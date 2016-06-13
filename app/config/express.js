const express = require('express');
const bodyParser = require('body-parser');
const routes = require('../routes');
const exphbs = require('express-handlebars');
const path = require('path');

module.exports = function() {
  var app = express();

  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());

  app.set('view engine', 'handlebars');
  app.set('views', path.join(__dirname, '..','views'));
  app.engine('handlebars', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(__dirname, '..', 'views', 'layouts'),
  }));

  // For some reason I had to put bower_components into the style folder
  // to make this work!
  app.use(express.static(path.join(__dirname, '..', '..', 'style')));

  routes(app);

	return app;
};
