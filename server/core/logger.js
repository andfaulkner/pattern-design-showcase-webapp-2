'use strict';

 /* global require, module, process */

/***************************************************************************************************
*
*		Log
*
*		Server side log handling and settings. Not to be confused with front-end log management.
*		Winston handles all server side logging to the console. It also logs any
*		'error' level (i.e. error, internalError, criticalError) to the database.
*
*/

var winston = require('winston');
var _ = require('../../lib/lodash');
var config = require('config');
var logConfig = config.get('logging').levelConfig;

/***
*		Winston instance with transports for logging
*/
var winstonLogger = new winston.Logger({
	levels: 		  logConfig.levels,
	colors: 		  logConfig.colors,
	transports: [
		new winston.transports.Console({
			level: 			process.env.LOG_LEVEL || 'info',
			colorize: true
		})
	]
});

module.exports = {
	file: createFileLogger()
};

/***
*		Create File Logger
*
*		Function will return a logger object contextified with a given prefix to use in all file logs.
*
*		@param prefix {String} The prefix to use in all file logs.
*/
function createFileLogger() {
	return function(fileName) {
		var logger = prefixedLogger('[' + fileName + ']');
		logger.fn = createFunctionLogger('[' + fileName + ']');
		return logger;
	};
}

/***
*		Create Function Logger
*
*		Function will return a logger object contextified with a given prefix to use in all function
*		logs.
*
*		@param prefix {String} The prefix to use in all function logs.
*/
function createFunctionLogger(prefix) {
	return function(fnName, args) {
		var fnData = prefix + ' ' + stringifyFunction(fnName, args);
		return prefixedLogger(fnData);
	};
}

// All other prefixed loggers are build off this one
// @prefix: comes after preprefix & timestamp but before rest of message
// @message: main item to log
// @level: 'silly', 'debug', 'trace', etc.
// @preprefix: comes before everything else - mainly for spacing purposes
function basePrefixedLogger(prefix, message, level, preprefix='') {
	message =  preprefix + (new Date()).toISOString() + ' ' + prefix + ' ' + message;
	winstonLogger[level].apply(this, arguments);
}

/***
*		Prefixed Logger
*
*		Function will return a logger object contextified with a given prefix to use in all logs.
*
* 	Silly log level is mainly for displaying everything 'trace' does plus an extended stack trace.
*
*		@param prefix {String} The prefix to use in all logs.
*/
function prefixedLogger(prefix) {
	return {
		silly: function(message) {
			basePrefixedLogger(prefix, message, 'silly');
			return this;
		},
		trace: function (message) {
			basePrefixedLogger(prefix, message, 'trace');
			return this;
		},
		debug: function(message) {
			basePrefixedLogger(prefix, message, 'debug');
			return this;
		},
		info: function(message) {
			// Space in front for evening the logs with error & trace
			basePrefixedLogger(prefix, message, 'info', ' ');
			return this;
		},
		warn: function(message) {
			basePrefixedLogger(prefix, message, 'warn', ' ');
			return this;
		},
		error: function(message) {
			basePrefixedLogger(prefix, message, 'error');
			return this;
		}
	};
}

// If we were passed an array, then we understand this to be a trace of the
// opening of a method. If it's not an array, we assume we're deeper in a method
// so just use it as a string.
function stringifyFunction(fnName, args) {
	var argsAsStrings = _.isString(args)
		? args
		: _.map(args, 
						(arg) => JSON.stringify(arg, null, 1))
			 .join(', ');
	return fnName + '(' + argsAsStrings + ')';
}
