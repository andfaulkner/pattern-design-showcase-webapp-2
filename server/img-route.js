/*			base route::   /api/image			*/

var express = require('express');
var router = express.Router();

router.post('/upload', function(req, res, next) {
	console.log(req);	
	res.send('success!');
});

module.exports = router;