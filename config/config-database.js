'use strict';

var _ = require('lodash');
var inspect = require('util').inspect;
var sharedUtils = require('../lib/sharedUtils');	

// true if it's a local dev server. Set in env vars when calling app.
const isLocal = ((process ? (process.env ? (process.env.LOCAL_DEV === 'true') : false) : false));

var primaryDb = 'mongo';
var secret = {};


//TODO separate production & dev db settings
//TODO move the backend db stuff out into a private file, this is bad practice
module.exports = {
	mongo: {
		type: primaryDb,
		dbURL: isLocal
			? 'mongodb://localhost'
			: process.env.MONGOLAB_URI || 
				'mongodb://heroku_n9rdt9vj:pjdpfkgu26tejn595s9dcpids5@ds021689.mlab.com:21689/heroku_n9rdt9vj',
		restAPIOrigin: isLocal
			? 'http://localhost:3000/'
			:	!sharedUtils.isNode()
					? location.origin
					: null,
		dbName: 'PATTERN_MAIN',
		port: '27017',
		restAPIRoute: '/api/v1/'
		// 	// user: secret.development.connection.user || 'NOUSER',
		// 	// database: secret.development.connection.database || 'NODATABASE',
		// 	charset: 'utf8'
	},

	// google auth tokens
	googleAuth: {
		clientID: _.get(secret, 'googleAuth.clientID') || 'NOCLIENTID',
		clientSecret: _.get(secret, 'googleAuth.clientSecret') || 'NOCLIENTSECRET',
		//URL to which Google will redirect the user after granting authorization
		// part of site the auth applies to
		callbackURL: '/auth/google/callback',
		secret: _.get(secret, 'googleAuth.secret') || 'NOSECRET',
		passReqToCallback: true
	},
	// current login session config
	session: {
		name:	_.get(secret, 'session.name') || 'NONAME',
		secret: _.get(secret, 'session.secret') || 'NOSECRET',
		resave: true,
		saveUninitialized: true
	},
	users: _.get(secret, 'usernamesArray') || ['NOUSER1'] 
}