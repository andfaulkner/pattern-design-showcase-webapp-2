/*			base route::   /api/image			*/
'use strict';

var express = require('express');
var router = express.Router();

router.post('/upload', function(req, res, next) {
	res.send('success!');
});

module.exports = router;