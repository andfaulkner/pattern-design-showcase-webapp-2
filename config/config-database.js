
var dbClient = 'postgres';

module.exports = {
	development: {
		client: dbClient,
		connection: {
			host: 'localhost',
			port: 5432,
			user: 'postgres',
			database: 'pattern_design',
			charset: 'utf8'
		}
	}
};