/**************************************************************************************************
*
*			Initialize the REST API for requesting data in MongoDB
*
*/
var _ = require('lodash');
var logger = require('server/core/logger').file('./serve-rest-api.js');
var express = require('express');
var router = express.Router();
var inspect = require('util').inspect;

// DATABASE
const mongoose = require('mongoose')
const restify = require('express-restify-mongoose')
const methodOverride = require('method-override');
var schema = require('data/schema');

module.exports = (app) => {
	const dbConfig = app.locals.config.get('database').mongo;
	const mongoURI = dbConfig.url + '/' + dbConfig.dbName;
	logger.info('mongoURI:: ', mongoURI);

	app.use(methodOverride())

	console.log('connecting to mongoURI: ' + inspect(mongoURI, { depth: 5, colors: true, showHidden: true }));
	mongoose.connect(mongoURI);
	restify.serve(app, mongoose.model('designs', new mongoose.Schema(schema.designs)));
	restify.serve(app, mongoose.model('updates', new mongoose.Schema(schema.updates)));
	restify.serve(app, mongoose.model('images', new mongoose.Schema(schema.images)));
	restify.serve(app, mongoose.model('bios', new mongoose.Schema(schema.bios)));

	return app;
};