/***************************************************************************************************
*
*			CREATE DB TABLES IF THEY DON'T ALREADY EXIST
*
*/

var config = require('config');
var knexConfig = config.get('database')[config.get('environment')];
var _ = require('lodash');
var knex = require('knex')(knexConfig);


function noTableCreated(table, e){
	console.log(table + ' table not created');
	console.log(e);
}

function checkForTable(table) {
	return knex.schema.hasTable(table);
}


// contains images
knex.schema.hasTable('images').then(function(exists) {
	if (exists) {
		throw new Error('images already exists');
		return;
	}
	return knex.schema.createTableIfNotExists('images', function(table) {
		table.increments('id').primary().notNullable().unique();
		table.integer('picture_order').notNullable().unique();
		table.binary('picture').notNullable();
		console.log('images table created');
	});
}).catch(_.partial(noTableCreated, 'images')).then(function(){
	return knex.schema.hasTable('box_titles');


// defines titles of content boxes
}).then(function(exists) {
	if (exists) {
		throw new Error('box_titles already exists');
		return;
	}
	return knex.schema.createTableIfNotExists('box_titles', function(table) {
		table.increments('id').primary().notNullable().unique();
		table.string('type').notNullable().unique();
		table.string('title').notNullable().unique();
		console.log('box_titles table created');
	});
}).catch(_.partial(noTableCreated, 'box_title'))


// defines content of text boxes
.then(_.partial(checkForTable, 'text_content'))
.then(function(exists) {
	if (exists) {
		throw new Error('text_content already exists');
		return e;
	}
	return knex.schema.createTableIfNotExists('text_content', function(table) {
		table.increments('id').primary().notNullable().unique();

		table.string('content_box_type')
					.notNullable()
					.references('type')
					.inTable('box_titles');
		table.integer('order').notNullable().unique(); //higher numbers === earlier in ordering

		table.string('title');
		table.string('text');
		table.dateTime('content_date'); // for 'news' type items

		table.string('link'); // optional url content links to
		table.boolean('url_linked_from_title'); // if true, attach url to title of content section
		table.string('linked_text'); // substring within text that links to the url
		console.log('text_content table created');
	});
}).catch(_.partial(noTableCreated, 'text_content'))


// defines top-level menu titles in main app menu
.then(_.partial(checkForTable, 'menu_titles'))
.then(function(exists) {
	if (exists) {
		throw new Error('menu_titles already exists!');
		return;
	}
	return knex.schema.createTableIfNotExists('menu_titles', function(table) {
		table.increments('id').primary().notNullable().unique();
		table.string('top_level_title').notNullable().unique();
		table.string('url');
		console.log('menu_titles table created');
	})
}).catch(_.partial(noTableCreated, 'menu_titles'))


// defines individual dropdown items in top-level menu
.then(_.partial(checkForTable, 'menu_dropdown'))
.then(function(exists) {
	if (exists) {
		throw new Error('menu_dropdown already exists!');
		return;
	}
	return knex.schema.createTableIfNotExists('menu_dropdown', function(table) {
		table.increments('id').primary().notNullable().unique();
		table.string('parent_title')
					.references('top_level_title')
					.inTable('menu_titles')
					.notNullable();
		table.integer('order').notNullable().unique(); //higher numbers === higher in the dropdown
		table.string('url');
		console.log('menu_dropdown table created');
	});
}).catch(_.partial(noTableCreated, 'menu_titles'))

// test table
.then(_.partial(checkForTable, 'test_table1'))
.then(function(exists) {
	if (exists) {
		throw new Error('test_table1 already exists!');
		return;
	}
	return knex.schema.createTableIfNotExists('test_table1', function(table) {
		table.increments('id').primary().notNullable().unique();
		table.string('author');
		table.string('text');
		console.log('test_table1 created!');
	});
}).catch(_.partial(noTableCreated, 'test_table1'))


// exit process, if it hasn't already
.then(function(){
		process.exit(2);
});