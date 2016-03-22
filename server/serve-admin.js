var _ = require('lodash');
var auth = require('server/core/passport-setup');
var { passport, appSession: session } = auth;

module.exports = (app) => {

	// set up Redis session for storing auth session
	app.use(session);

	// authentication middleware
	app.use(passport.initialize());
	app.use(passport.session());

	app.use((req, res, next) => {
		logger.trace('request received');
		next();
	});

	app.get('/admin', ensureAuthenticated, (req, res) => { 
		res.send('in admin');
	});

	// GET /auth/google
	//   Use passport.authenticate() as route middleware to authenticate the request.  The 1st step
	//   in Google authentication involves redirecting the user to google.com. After authorization,
	//   Google redirects the user back to this app at /auth/google/callback
	app.get('/auth/google',
		passport.authenticate('google', 
		{ 
			scope: ['https://www.googleapis.com/auth/plus.login'] 
		}
	));

	// GET /auth/google/callback
	//   Use passport.authenticate() as route middleware to authenticate request.  If authentication
	//   fails, user is redirected back to login page. Otherwise, the primary route function
	//   is called, which, in this example, redirects the user to the home page.
	app.get('/auth/google/callback',
	  passport.authenticate('google', 
	  	{
	  		successRedirect: '/admin',
	  		failureRedirect: '/index#login'
			}
	));

	return app;
};


/**
 * Simple route middleware to ensure user is authenticated.
 * Use this route middleware on any resource that needs to be protected.  If the
 * request is authenticated (typically via a persistent login session), the request
 * request will proceed.  Otherwise, the user will be redirected to the login page.
 */
function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) { return next(); }
  res.redirect('/index#login');
}