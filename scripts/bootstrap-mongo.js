var _ = require('lodash');

var assert = require('assert');
var mongoose = require('mongoose');
var async = require('async');

// ********************* DB CONFIG ********************* 
var config = require('config');
const dbConfig = config.get('database').mongo;
// Connection URL
const mongoURI = dbConfig.url + '/' + dbConfig.dbName;

// ********************* SCHEMA SETUP ********************* 
// import the schema for the database
var schema = require('../data/schema');
var Design = mongoose.model('Design', schema.designs);
var Update = mongoose.model('Update', schema.updates);
var Image = mongoose.model('Image', schema.images);
var Bio = mongoose.model('Bio', schema.bios);

// ******************** IMPORT DATA ******************** //
const designData = require('./mongo-bootstrap-data/designsData.js');
const imageData = require('./mongo-bootstrap-data/imagesData.js');
const updateData = require('./mongo-bootstrap-data/updatesData.js');
const bioData = require('./mongo-bootstrap-data/bioData.js');

// ******************** SETUP DB CONNECTION ********************
mongoose.connect(mongoURI);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'mongodb connection error:'));

// CONNECT TO DB
db.once('open', () => {
	console.log(db)
	console.info('Connected correctly to server');
	//Runs the following functions in parallel, with the final callback receiving an array containing
	//the return results of each function in the 1st arg given to async.parallel; and/or errors.
	async.parallel([
		function(next){
			async.each(updateData, _.partial(saveData, Update), _.partial(saveDone, next, 'Updates'));
		},
		function(next){
			async.each(imageData, _.partial(saveData, Image), _.partial(saveDone, next, 'Images'));
		},
		function(next){
			async.each(designData, _.partial(saveData, Design), _.partial(saveDone, next, 'Designs'));
		},
		function(next){
				async.each(bioData, _.partial(saveData, Bio), _.partial(saveDone, next, 'Bio'));
		}
	], function asyncParallelFinal(err, results){
		if (err) {
			console.error('saving data failed');
			return;
		}
		console.log('All db items loaded!');
		process.exit();
		return;
	});
})

function saveData(Schema, item, callback) {
	var Data = new Schema(item);
	Data.save(function(err) {
		// ignore duplicate key errors
		if (err && err.message.search('E11000 duplicate key error') === -1) {
			console.error('Error handling data save: ', err)
			console.error('err name: ', err.name);
			console.error('err message: ', err.message);
			console.error('err driver: ', err.driver);
			console.error('err code: ', err.code);
			console.error('err index: ', err.index);
			console.error('err errMsg: ', err.errMsg);
			console.error('err getOperation: ', err.getOperation);
			console.error('err toJSON: ', err.toJSON);
			console.error('err toString: ', err.toString);
			console.error('\n\n\n');
		}
		callback();
	});
}

function saveDone(next, type, err) {
	if (err) {
		console.error('Saving data of type ' + type + ' failed: ', err);
		next(err);
	}
	console.log('saved ' + type);
	next(err);
}
// connect
// check for dupe (use id)
// insert if no dupe

function insertData(db, data, collectionName, callback) {
	db.collection(collectionName, (collection) => {
		console.log(collection);
		console.log('exiting')
		callback();
	});
}


// function insertDocuments(db, data, collName, callback) {
// 	console.log('\n\n\ncollName: ', collName);
// 	console.log('\n\n\ndb: ', db);

//   // Get the documents collection
// 	db.collection(collName, (coll) => {
// 		console.log('\n\n\ncoll: ', coll);

// 		var savedCollection = coll.find();
// 		console.log('\n\n\nsavedCollection: ', savedCollection);

// 		var itemsToInsert = _.filter(data, dataItem => {
// 			console.log('\ndataItem: ', dataItem);
// 			return _.find(savedCollection, savedDataItem => {
// 				console.log('\nsavedDataItem: ', savedDataItem);
// 				return _.isEqual(savedDataItem, dataItem)
// 			});
// 		});

// 		console.log('itemsToInsert: ', itemsToInsert);

// 		collection.insert(itemsToInsert, {w:1, keepGoing:true}, (err, results) => {
// 			callback();
// 		});
// 	});


  // // Add an unique index to title to force errors in the batch insert
  // collection.ensureIndex(Object.keys(data).map(key => ({[key]: 1})),
  // 											 {unique:true}, (err, indexName) => {
  //     // Force keep going flag, ignoring unique index issue
  //     collection.insert(data, {w:1, keepGoing:true}, function(err, result) {
  //     	callback();
  //     });
  // });

  // // Insert some documents
  // collection.insertMany(data, (err, result) => {
  //   console.log('Inserted ' + data.length + ' documents into collection: ' + collName);
  //   callback(result);
  // });
