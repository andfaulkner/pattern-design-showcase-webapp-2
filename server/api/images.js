
var _ = require('lodash');
var logger = require('server/core/logger').file('server/api/images.js');
var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
	console.log('images:: default!')
	res.send('images: rest-api: default');
});

module.exports = router;