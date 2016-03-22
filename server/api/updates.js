
var _ = require('lodash');
var logger = require('server/core/logger').file('server/api/updates.js');
var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
	console.log('updates:: default!')
	res.send('updates: rest-api: default');
});

module.exports = router;