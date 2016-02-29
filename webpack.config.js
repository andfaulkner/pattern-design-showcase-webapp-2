var _ = require('lodash');
const path = require('path');
const webpack = require('webpack');
var buildConfig = require('./config/config-build-paths');

const OUTPUT_DIR = path.resolve(__dirname, '.build');
const CLIENT_SRC_DIR = path.resolve(__dirname, './client');
const NODE_MODULES_ABS_DIR = path.join(__dirname, 'node_modules');

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
        include: [CLIENT_SRC_DIR, NODE_MODULES_ABS_DIR],
				loader: 'babel',
				query: {
					plugins: ['transform-decorators-legacy', 'transform-es2015-destructuring'],
					presets: ['es2015', 'stage-0', 'react'],
					cacheDirectory: '.cache'
				}
			}
		]
	},
	cache: true,
	resolve: {
    extensions: ["", ".js", ".jsx", ".json"],
		modules: ['node_modules', NODE_MODULES_ABS_DIR, CLIENT_SRC_DIR],
    descriptionFiles: ['package.json', 'bower.json'],
		mainFields: ['dependencies', 'devDependencies']
		// modulesDirectories: [path.join(__dirname, 'node_modules')],
		// you can now require('file') instead of require('file.jsx')
	},
	externals: buildConfig.webpackExternalModules,
	plugins: [
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': '"production"'
		}),
		new webpack.optimize.DedupePlugin()
	]
};
