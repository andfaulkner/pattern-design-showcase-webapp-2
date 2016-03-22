
var _ = require('lodash');
var logger = require('server/core/logger').file('server/api/designs.js');
var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
	console.log('designs:: default!')
	res.send('designs: rest-api: default');
});

module.exports = router;