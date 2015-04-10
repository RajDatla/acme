'use strict';

/* jshint -W098 */
// The Package is past automatically as first parameter
module.exports = function(Analytics, app, auth, database) {

  app.get('/analytics/example/anyone', function(req, res, next) {
    res.send('Anyone can access this');
  });

  app.get('/analytics/example/auth', auth.requiresLogin, function(req, res, next) {
    res.send('Only authenticated users can access this');
  });

  app.get('/analytics/example/admin', auth.requiresAdmin, function(req, res, next) {
    res.send('Only users with Admin role can access this');
  });

  app.get('/analytics/example/render', function(req, res, next) {
    Analytics.render('index', {
      package: 'analytics'
    }, function(err, html) {
      //Rendering a view from the Package server/views
      res.send(html);
    });
  });
};
