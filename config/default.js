var envVars = require('./environment-vars');
var loggingOpts = require('./config-logging');
var databaseOpts = require('./config-database');
var serverOpts = require('./config-server');

module.exports = {
	envVars: envVars,
	environment: envVars.env,
	server: serverOpts,
	database: databaseOpts,
	logging: loggingOpts
};
