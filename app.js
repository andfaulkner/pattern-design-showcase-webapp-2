var util = require('util');
var bodyParser = require('body-parser');

var express = require('express');
var app = express();
app.use(bodyParser.raw());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// routes
var imageRoutes = require('./server/img-route');

// attach Bookshelf ORM (database abstraction) to the app
// app.set('Bookshelf', require('./server/db/init-db'));
// var Bookshelf = app.get('Bookshelf')

var Bookshelf = require('./server/db/init-db');

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

app.get('/api/comments', function(req, res) {
	//extract comments from the db
	testCommentsCollection.fetch()
		.then(function(comments) {
			console.log('comments successfully fetched!');
			res.send(comments);
		});
});

app.post('/api/comments', function(req, res, next) {
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


app.use('/api/image', imageRoutes);



app.use(express.static('./.build'));

app.listen(3000);
