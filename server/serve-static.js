var path = require('path');
var _ = require('lodash');
var express = require('express');

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

	return app;
};