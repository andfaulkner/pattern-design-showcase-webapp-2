
var _ = require('lodash');
var logger = require('server/core/logger').file('./serve-rest-api.js');
var express = require('express');
var router = express.Router();

router.use('/designs', require('server/api/designs'));
router.use('/updates', require('server/api/updates'));
router.use('/images', require('server/api/images'));

module.exports = router;