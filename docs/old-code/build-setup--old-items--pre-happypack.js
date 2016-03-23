// *********************** webpack.config.js *********************** //

// PRIOR TO HAPPYPACK, JSX LOADER WAS LIKE THIS:
// {
// 	test: /\.jsx?$/,
// 	include: [CLIENT_SRC_DIR],
// 	loader: 'babel',
// 	query: _.defaultsDeep({}, babelOpts, { 
// 		cacheDirectory: '.cache'
// 	})
// }
// 

// *********************** config-paths.js *********************** //

//OLD CONFIG PATHS, INSIDE entryPoints:
//	entryPoints: [
//		/* ...OTHER PATHS HERE */
//	 {
//		basename: 'redux-experiments',
//		title: 'Redux Experiments',
//		jsroot: 'redux-experiments',
//		folder: 'experiments'
//	 }, {
//		basename: 'redux-experiments-2',
//		title: 'Redux Experiments - 2',
//		jsroot: 'redux-experiments-2',
//		folder: 'experiments'
//	 }, {
//		basename: 'index-todo',
//		title: 'Todo',
//		jsroot: 'index-todo'
//	 }
//	] 

// INSIDE libs:
//	var libs = [
//		{ lib: 'react', childPath: 'dist', varName: 'React', file: 'react-with-addons'},
//		{ lib: 'react-dom', childPath: 'dist', varName: 'ReactDOM' },
//		{ lib: 'react-router', varName: 'ReactRouter', noNode: true }
//	]

// *********************** config-database *********************** //

// Prior to eliminating postgres & Redis, replacing with Mongo:
//
//	var dbClient = 'postgres';
//	var cacheClient = 'redis';
//	/*...*/
//	
	// development: {
	// 	client: dbClient,
	// 	connection: {
	// 		host: 'localhost',
	// 		port: 5432,
	// 		user: 'postgres',
	// 		database: 'pattern_design',
	// 		// user: secret.development.connection.user || 'NOUSER',
	// 		// database: secret.development.connection.database || 'NODATABASE',
	// 		charset: 'utf8'
	// 	}
	// },
	//
	// cache: {
	// 	client: cacheClient,
	// 	opts: {
	// 		host: 'localhost',
	// 		port: 6379
	// 	}
	// },
