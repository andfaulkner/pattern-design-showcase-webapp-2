
var _ = require('lodash');
var logger = require('server/core/logger').file('server/api/updates.js');
var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
	console.log('updates:: default!')
	res.send('updates: rest-api: default');
});

router.get('/asdf', function(req, res) {
	console.log('updates:: default - asdf!')
	res.send('updates: rest-api: default - asdf');
});

module.exports = router;