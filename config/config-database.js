'use strict';

var dbClient = 'postgres';
var cacheClient = 'redis';
var secret = require('./secret') || {};
var _ = require('lodash');

module.exports = {
	development: {
		client: dbClient,
		connection: {
			host: 'localhost',
			port: 5432,
			user: 'postgres',
			database: 'pattern_design',
			// user: secret.development.connection.user || 'NOUSER',
			// database: secret.development.connection.database || 'NODATABASE',
			charset: 'utf8'
		}
	},
	// current data
	cache: {
		client: cacheClient,
		opts: {
			host: 'localhost',
			port: 6379
		}
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
		name:   _.get(secret, 'session.name') || 'NONAME',
		secret: _.get(secret, 'session.secret') || 'NOSECRET',
		resave: true,
		saveUninitialized: true
	},
	users: _.get(secret, 'usernamesArray') || ['NOUSER1'] 
};