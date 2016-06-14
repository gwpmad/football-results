const express = require('express');
const bodyParser = require('body-parser');
const routes = require('../routes');
const exphbs = require('express-handlebars');
const path = require('path');

module.exports = function() {
  const app = express();

  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  app.set('view engine', 'handlebars');
  app.set('views', path.join(__dirname, '..', 'views'));
  app.engine('handlebars', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(__dirname, '..', 'views', 'layouts'),
  }));

// the route for this always starts from the directory where the file that
// starts node is - in this case it's server.js in the root folder.
  app.use(express.static('./public'));
  routes(app);

  // error handling - this middleware comes last
  app.use(function(err, req, res, next){
    res.render('500', {
        status: err.status || 500,
        error: err
    });
  });


  return app;
};
