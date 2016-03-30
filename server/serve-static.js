var path = require('path');
var _ = require('lodash');
var express = require('express');
var jsonStringify = require('json-stringify-safe');

module.exports = (app) => {

	// routes & apis
	app.use('/api/image', 		require('server/img-route'));

	//
	// serve each html & js entry file, based on values in the app config.
	//
	app.locals.config.get('htmlEntryPoints').forEach(
		(entry) => {
			if (_.get(entry, 'basename') && _.get(entry, 'jsroot')) {
				const pathRoot = path.join('.build', entry.basename);
				app.use(path.join('/', entry.basename),				express.static(pathRoot  + '.html'));
				app.use(path.join('/', entry.jsroot) + '.js', express.static(pathRoot  + '.js'));
			}
		}
	);

	//
	// serve static assets
	//
	app.use('/lib',		 express.static('.build/lib'));
	app.use('/styles', express.static('.build/styles'));
	app.use('/fonts',	 express.static('.build/fonts'));
	app.use('/img',		 express.static('.build/img'));
	app.use('/img',		 express.static('data/img/public'));

	//
	// MUST RUN 2ND LAST!!
	// 
	// Handle requests to nonexistent paths.
	//
	// If this is reached without another route catching the
	// request, user is requesting an undefined path; return error.
	//
	app.use('/:undefinedPath', function(req, res, next) {
		if (req.params.undefinedPath === 'index' || req.params.undefinedPath === 'index.html') {
			next();
		} else {
			console.log('Cannot GET ' + req.originalUrl)
			res.status(404).sendFile(path.join(__dirname, '..', '.build/404.html'));
		}
	});

	//
	// MUST RUN LAST!!
	// 
	// Handle default requests
	//
	app.use('/', function(req, res, next) {
		res.sendFile('index.html', {root: path.join(__dirname, '..', '.build')}, function(err) {
			console.log('serve-static.js:: index.html served at root path!');
		});
	});

	return app;
};