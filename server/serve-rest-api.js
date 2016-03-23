
var _ = require('lodash');
var logger = require('server/core/logger').file('./serve-rest-api.js');
var express = require('express');
var router = express.Router();

// DATABASE
const mongoose = require('mongoose')
const restify = require('express-restify-mongoose')
const methodOverride = require('method-override');

// router.use('/designs', require('server/api/designs'));
// router.use('/updates', require('server/api/updates'));
// router.use('/images', require('server/api/images'));

module.exports = (app) => {
	const dbConfig = app.locals.config.get('database').mongo;
	const mongoURI = dbConfig.url + '/' + dbConfig.dbName;

	logger.info('mongoURI:: ', mongoURI);

	app.use(methodOverride())

	mongoose.connect(mongoURI);

	restify.serve(app, mongoose.model('designs', new mongoose.Schema({
		title: { type: String, required: true },
		textContent: { type: mongoose.Schema.Types.Mixed, required: true },
		date: { type: String, required: true }
	})));

	restify.serve(app, mongoose.model('updates', new mongoose.Schema({
		title: { type: String, required: true },
		textContent: { type: mongoose.Schema.Types.Mixed, required: true },
		date: { type: String, required: true }
	})));

	restify.serve(app, mongoose.model('images', new mongoose.Schema({
		src: { type: String, required: true },
		inCarousel: { type: Boolean, required: true },
		inGallery: { type: Boolean, required: true },
		isThumb: { type: Boolean, required: true },
		linkedParent: { type: Boolean },
		date: { type: String }
	})));

	// app.use(router);

	return app;
};