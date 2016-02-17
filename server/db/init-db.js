var config = require('config');

// get the db
var dbConfig = config.get('database').development;
var knex = require('knex')(dbConfig);
var bookshelf = require('bookshelf')(knex);

bookshelf.plugin('registry');

// //define basic bookshelf model - TestComments (for test example)
// var TestComments = bookshelf.Collection.extend({
// 	tableName: 'test_table1',
// 	idAttribute: 'id'
// });

// bookshelf.Collections = {
// 	TestComments: TestComments
// };

module.exports = bookshelf;