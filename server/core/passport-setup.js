'use strict';

// auth modules
var session = require('express-session');
var RedisStore = require('connect-redis')(session);
var passport = require('passport');
var _ = require('lodash');
var GoogleStrategy = require('passport-google-oauth2').Strategy;
const crypto = require('crypto');

var config = require('config');
var users = config.database.users;
var logger = require('../core/logger').file('server/core/passport-setup');
var inspect = require('util').inspect;

var bluebird = require('bluebird');

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));

// Associate the Google account with a user record in your db, & return that user instead.
passport.use(new GoogleStrategy(config.database.googleAuth,
	(req, accessToken, refreshToken, profile, next) => {
		let fnLog = logger.fn('PP: GoogleStrategy').info(refreshToken).trace(profile);

		// make the client accept promises to avoid callback hell
		let client = req.sessionStore.client;
		bluebird.promisifyAll(client);	//Asynced: 'get', 'set', 'hset', 'hget', 'hkeys', 'hgetall'

		//create hash from returned components, determine if it's in the db, only allow if it is
		let {kind, objectType, url, id} = profile._json;
		hasher(kind + objectType + url + id)
			.then((hash) => client.hgetallAsync(hash))
			.then((hashValues) => {
				if (hashValues && users.includes(hashValues.username)) {
					return next(null, hashValues.username);
				}
				throw new Error('user not authorized');
			})
			.catch((err) => {
				fnLog.error(err);
				return next(err);
		});
}));

var appSession = session(_.defaults(config.database.session, {
	store: new RedisStore(config.database.cache.opts) 
}));

function hasher (hashMe, next) {
	return new Promise(function(resolve, reject) {
		const hash = '1' + crypto
			.createHash('sha256')
			.update(hashMe + config.database.session.secret)
			.digest('hex') + 'z';
		console.log(hash);
		if (hash) resolve('user:' + hash);
		else reject('fail');
	});
}

module.exports = {
	passport,
	appSession
};