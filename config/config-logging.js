var envVars = require('./environment-vars');

module.exports = {
	//  show all requests and responses going in and out in the terminal
	logLevel: envVars.logLevel,
	levelConfig: {
		levels: {
			silly: 0,
			trace: 1,
			debug: 2,
			info: 3,
			warn: 4,
			error: 5
		},
		colors: {
			silly: 'magenta',
			trace: 'cyan',
			debug: 'blue',
			info: 'green',
			warn: 'yellow',
			error: 'red'
		}
	}
}