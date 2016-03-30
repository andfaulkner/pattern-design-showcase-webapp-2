require('babel-core/register');
require('babel-polyfill');
var HappyPack = require('happypack');

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

console.log(buildConfig.polyfills);

module.exports = {
	debug:true,
	entry: _.defaultsDeep({},
		_.reduce(buildConfig.entryPoints, function(allEntries, entryPoint) {
			console.log('webpack file, in reducer - for entryPoint: ', entryPoint);
			if (_.get(entryPoint, 'jsroot')) {
				allEntries[entryPoint.jsroot] = path.join(CLIENT_SRC_DIR,
					entryPoint.folder || '', entryPoint.jsroot + '.jsx');				
			}
			return allEntries;
		}, {})
	),
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
				include: [CLIENT_SRC_DIR],
		    loader: 'happypack/loader',
			}
		]
	},
	cache: true,
	resolve: {
		extensions: ['', '.js', '.jsx', '.json'],
		modules: ['node_modules', NODE_MODULES_ABS_DIR],
		descriptionFiles: ['package.json', 'bower.json'],
		mainFields: ['dependencies', 'devDependencies']
		// modulesDirectories: [path.join(__dirname, 'node_modules')],
		// you can now require('file') instead of require('file.jsx')
	},
	externals: buildConfig.webpackExternalModules,
	plugins: [
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': '"development"'
		}),
		new HappyPack({ 
			loaders: ['babel?presets[]=es2015,presets[]=stage-0,presets[]=react,plugins[]=transform-runtime,plugins[]=transform-async-functions,plugins[]=transform-decorators-legacy,plugins[]=transform-es2015-destructuring,plugins[]=transform-object-assign,cacheDirectory=.cache'],
			threads: 4
		})
	]
};
