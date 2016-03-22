'use strict';

// node modules
var util = require('util');
var logger = require('server/core/logger').file('./app.js');
var path = require('path');
var _ = require('lodash');

// basic middleware modules
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

// require express framework & launch the application
var app = require('express')();

// add app config to the express app object
app.locals.config = require('config');
logger.debug(app.locals.config);

app.use('/api', require('server/serve-rest-api')),

// consume & initialize basic middleware
app.use(bodyParser.raw());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// consume the subcomponents of the app
app = _.flow(
	require('server/serve-static'),
	require('server/serve-admin') // serve-admin must always go last
)(app);

// listen for requests on port 3000
app.listen(3000);