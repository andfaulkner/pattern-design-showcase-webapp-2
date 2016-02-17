const path = require('path');
const webpack = require('webpack');

const OUTPUT_DIR = path.resolve(__dirname, '.build');
const CLIENT_SRC_DIR = path.resolve(__dirname, './client');

module.exports = {
	entry: path.join(CLIENT_SRC_DIR, 'index.jsx'),
	output: {
		path: OUTPUT_DIR,
		filename: 'index.js'
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
				loader: 'babel-loader',
				query: {
					presets: ['es2015', 'react']
				}
			}
		]
	},
	resolve: {
		root: __dirname,
		modulesDirectories: ['node_modules'],
		// you can now require('file') instead of require('file.jsx')
		extensions: ['', '.js', '.json', 'jsx']
	},
	externals: {
		// require("jquery") react-dom.min is external, available externally, etc.
		"ReactDom": "react-dom.min",
		"React": "react-with-addons.min",
		"_": "lodash",
		"$": "jQuery",
		"jquery": "jQuery",
		"marked": "marked"
	}
};
