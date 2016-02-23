'use strict';

var dbClient = 'postgres';
var cacheClient = 'redis';

module.exports = {
	development: {
		client: dbClient,
		connection: {
			host: 'localhost',
			port: 5432,
			user: 'postgres',
			database: 'pattern_design',
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
		clientID: '503420002517-mf7436jtf6pvu85joj1j0ll098ujr54s.apps.googleusercontent.com',
		clientSecret: '5K3fBxCvIBJ2tWNXQeJuX3c2',
		//URL to which Google will redirect the user after granting authorization
		// part of site the auth applies to
		callbackURL: '/auth/google/callback',
		secret: '5K3fBxCvIBJ2tWNXQeJuX3c2',
		passReqToCallback: true
	},
	// current login session config
	session: {
		name:   'andfaulkner',
		secret: 'moomlington',
		resave: true,
		saveUninitialized: true
	},
	users: ['admin', 'tamara', 'andrew']
};