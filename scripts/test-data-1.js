
var config = require('config');
var knexConfig = config.get('database')[config.get('environment')];
var _ = require('lodash');
var knex = require('knex')(knexConfig);


knex('test_table1').insert({author: 'Meeka Faulkner', text: 'meeka is a big ball of fluff!'})
	.then(function() {
		console.log('in then!');
		return knex('test_table1').insert({author: 'Moomsling', text: 'Ball of fluff comment 2!'});
	})
	.then(function() {
		console.log('done!');
		process.exit('2');
	});