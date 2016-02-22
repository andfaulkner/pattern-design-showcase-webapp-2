var _ = require('lodash');
const path = require('path');
const webpack = require('webpack');
var buildConfig = require('./config/config-build-paths');

const OUTPUT_DIR = path.resolve(__dirname, '.build');
const CLIENT_SRC_DIR = path.resolve(__dirname, './client');

module.exports = {
	entry: {
		'admin': path.join(CLIENT_SRC_DIR, 'admin.jsx'),
		'index-todo': path.join(CLIENT_SRC_DIR, 'index-todo.jsx'),
		'index': path.join(CLIENT_SRC_DIR, 'index.jsx'),
	},
	output: {
		path: OUTPUT_DIR,
    filename: '[name].js'
	},
	module: {
		loaders: [
			{
				test: /\.s[ca]ss$/,
				loader: 'style-loader!css-loader!sass-loader'
			}, // use ! to chain loaders
			{ 
				test: /\.css$/, 
				loader: 'style-loader!css-loader'
			},
			{
				test: /\.jsx?$/,
				loader: 'babel',
				query: {
					plugins: ['transform-decorators-legacy'],
					presets: ['es2015', 'react', 'stage-0'],
					cacheDirectory: '.cache'
				}
			}
		]
	},
	cache: true,
	resolve: {
		root: __dirname,
		modulesDirectories: ['node_modules'],
		// you can now require('file') instead of require('file.jsx')
		extensions: ['', '.js', '.json', 'jsx']
	},
	externals: buildConfig.webpackExternalModules,
	plugins: [
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': '"production"'
		})
	]

	// 	 {
	// 	'./lib/react-dom': 'ReactDom',
	// 	'./lib/react-with-addons': 'React',
	// 	'./lib/lodash': '_',
	// 	'./lib/jquery': '$',
	// 	'./lib/jquery': 'jquery',
	// 	'./lib/marked': 'marked'
	// }
};
