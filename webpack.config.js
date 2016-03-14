require('babel-core/register');
require('babel-polyfill');

var _ = require('lodash');
const path = require('path');
const webpack = require('webpack');
var buildConfig = require('./config/config-paths');

var fs = require('fs');

var babelOpts = JSON.parse(fs.readFileSync('./.babelrc', 'utf8').toString());

console.log(babelOpts);

const OUTPUT_DIR = path.resolve(__dirname, '.build');
const CLIENT_SRC_DIR = path.resolve(__dirname, './client');
const NODE_MODULES_ABS_DIR = path.join(__dirname, 'node_modules');

module.exports = {
	debug:true,
	entry: _.reduce(buildConfig.entryPoints, function(allEntries, entryPoint) {
		allEntries[entryPoint.jsroot] = path.join(CLIENT_SRC_DIR,
			entryPoint.folder || '', entryPoint.jsroot + '.jsx');
		return allEntries;
	}, {}),
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
				query: _.defaultsDeep({}, babelOpts, { cacheDirectory: '.cache' })
			}
		]
	},
	cache: true,
	resolve: {
		extensions: ['', '.js', '.jsx', '.json'],
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
		})
	]
};
