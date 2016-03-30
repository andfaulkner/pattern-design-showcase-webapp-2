/**************************************************************************************************
*
* 		Populate MongoDB database with initial data.
*
*			If environment variable OVERWRITE_MONGO_BOOTSTRAP_DATA is 'true', overwrite db records
*			with the same IDs as items in the 'initial data' files (e.g. updatesData.js).. e.g.:
*
*   		export OVERWRITE_MONGO_BOOTSTRAP_DATA=true; node scripts/bootstrap-mongo.js
*
* 				...would overwrite database items sharing IDs with the items in the data files.
*
*/

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
	console.info('Successfully connected to database');
	async.parallel([
		(next => async.each(updateData, _.partial(save, Update, 'Update'), next)),
		(next => async.each(imageData, _.partial(save, Image, 'Image'), next)),
		(next => async.each(designData, _.partial(save, Design, 'Design'), next)),
		(next => async.each(bioData, _.partial(save, Bio, 'Bio'), next))
	], (err, results) => {
		console.log('final cb!');
		if (err) {
			console.error('saving data failed, with error: ', err);
		} else {
			console.log('All db items saved!');
		}
		return process.exit();
	});
})

function save(Schema, typeName, item, cb) {
	var Data = new Schema(item);
	Data.save((err) => {
		// handle all errors unrelated to duplicate keys
		if (err && err.message.search('E11000 duplicate key error') === -1) {
			console.error('Error handling data save of ' + typeName + ': ', err);
			console.error('err name: ', err.name);
			console.error('err message: ', err.message);
			return cb(err);
		// handle duplicate key errors - erase the record & save again if env var is set.
		} else if (err && (process.env.OVERWRITE_MONGO_BOOTSTRAP_DATA === 'true')) {
			Data.remove(item, (err) => {
				if (err) {
					console.error('data removal failed with error: ', err);
					return cb();
				}
				return save(Schema, typeName, item, cb);
			});
		// handle successful save, or duplicate data that won't be overwritten
		} else {
			console.info('record of type ' + typeName + ' successfully saved.');
			return cb();
		}
	});
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
