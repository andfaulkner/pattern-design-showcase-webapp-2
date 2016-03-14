'use strict';

var util = require('util');
var logger = require('./server/core/logger').file('./app.js');
var path = require('path');
var _ = require('lodash');

// basic middleware
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

var config = require('config');
console.log(config);

var auth = require('./server/core/passport-setup');
var { passport, appSession: session } = auth;

// start server
var express = require('express');
var app 		= express();

// consume & initialize basic middleware
app.use(bodyParser.raw());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// routes & apis
app.use('/api/comments',	require('./server/routes/comment-route'));
app.use('/api/image', 		require('./server/img-route'));

app.use((req, res, next) => {
	// logger.trace(req);
	next();
});

// serve public portion of site
_.each(config.get('htmlEntryPoints'), (entryPoint) => {
	if (_.get(entryPoint, 'basename') && _.get(entryPoint, 'jsroot')) {
		const htmlPath = path.join('/', entryPoint.basename);
		const jsPath = path.join('/', entryPoint.jsroot) + '.js';
		const filePathRoot = path.join('.build', entryPoint.basename);

		console.log('\nfilePathRoot: ', filePathRoot)
		console.log('htmlPath: ', htmlPath)
		console.log('jsPath: ', jsPath)

		app.use(htmlPath, express.static(filePathRoot  + '.html'));
		app.use(jsPath, express.static(filePathRoot + '.js'));
	}
});
// app.use('/index',									express.static('./.build/index.html'));
// app.use('/index.js',							express.static('./.build/index.js'));
// app.use('/redux-experiments',			express.static('./.build/redux-experiments.html'));
// app.use('/redux-experiments.js',	express.static('./.build/redux-experiments.js'));
app.use('/lib',										express.static('./.build/lib'));
app.use('/styles',								express.static('./.build/styles'));
app.use('/fonts',									express.static('./.build/fonts'));
app.use('/img',										express.static('./.build/img'));
app.use('/img',										express.static('./data/img/public'));

// 
// AUTH
// 

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
	console.log('at admin!');
	res.send('in admin');
});

// GET /auth/google
//   Use passport.authenticate() as route middleware to authenticate the request.  The 1st step
//   in Google authentication involves redirecting the user to google.com. After authorization,
//   Google redirects the user back to this app at /auth/google/callback
app.get('/auth/google', passport.authenticate('google', { scope: [
       'https://www.googleapis.com/auth/plus.login'] 
}));

// GET /auth/google/callback
//   Use passport.authenticate() as route middleware to authenticate request.  If authentication
//   fails, user is redirected back to login page. Otherwise, the primary route function
//   is called, which, in this example, redirects the user to the home page.
app.get('/auth/google/callback',
    	passport.authenticate( 'google', {
    		successRedirect: '/admin',
    		failureRedirect: '/index#login'
}));

app.listen(3000);

// Simple route middleware to ensure user is authenticated.
//   Use this route middleware on any resource that needs to be protected.  If the
//   request is authenticated (typically via a persistent login session), the request
//   request will proceed.  Otherwise, the user will be redirected to the login page.
function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) { return next(); }
  res.redirect('/index#login');
}