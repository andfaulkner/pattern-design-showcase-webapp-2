'use strict';

var dbClient = 'postgres';
var cacheClient = 'redis';
var secret = require('./secret');

module.exports = {
	development: {
		client: dbClient,
		connection: {
			host: 'localhost',
			port: 5432,
			user: secret.development.connection.user,
			database: secret.development.connection.database,
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
		clientID: secret.googleAuth.clientID,
		clientSecret: secret.googleAuth.clientSecret,
		//URL to which Google will redirect the user after granting authorization
		// part of site the auth applies to
		callbackURL: '/auth/google/callback',
		secret: secret.googleAuth.secret,
		passReqToCallback: true
	},
	// current login session config
	session: {
		name:   secret.session.name,
		secret: secret.session.secret,
		resave: true,
		saveUninitialized: true
	},
	users: secret.usernamesArray
};