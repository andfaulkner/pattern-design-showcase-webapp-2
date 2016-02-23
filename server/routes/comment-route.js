/*			base route::   /api/image			*/
'use strict';

var express = require('express');
var router = express.Router();


var Bookshelf = require('../db/init-db');

// attach Bookshelf ORM (database abstraction) to the app
// app.set('Bookshelf', require('./server/db/init-db'));
// var Bookshelf = app.get('Bookshelf')

// to save to
var TestComment = Bookshelf.Model.extend({
	tableName: 'test_table1',
	idAttribute: 'id'
});

// to fetch from
var TestComments = Bookshelf.Collection.extend({
	model: TestComment
});

var testCommentsCollection = new TestComments();
var testComment = new TestComment();

router.get('/', function(req, res) {
	//extract comments from the db
	testCommentsCollection.fetch()
		.then(function(comments) {
			console.log('comments successfully fetched!');
			res.send(comments);
		});
});

router.post('/', function(req, res, next) {
	TestComment.forge({
		author: req.body.author,
		text: req.body.text
	})
	.save()
	.then(function(){
		console.log('new data save success!');
		res.send(JSON.stringify('success!'));
	});
});

module.exports = router;