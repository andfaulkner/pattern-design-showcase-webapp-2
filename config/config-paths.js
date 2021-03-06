/**************************************************************************************************
*
*			CONFIGURES SOURCE FILES PATHS, OUTPUT/BUILD FILE PATHS, &
*			URL PATHS AT WHICH RESOURCES AND CONTENT ARE SERVED
*
*/

var path = require('path');
var _ = require('lodash');

/***
* 	Found in node_modules - add more here to include more paths
*				lib: node_modules/{{lib}}
*		  	childPath: node_modules/{{lib}}/{{childPath}}
*				varName: name of variable ./lib/{{file}} maps to in code (for excluding from webpack build)
*			OPTIONAL:
*				file: node_modules/{{lib}}/{{childPath}}/{{file}} << final output 'gulp' path
*								BUT IF NOT...
* 			node_modules/{{lib}}/{{childPath}}/{{lib}}  			<< final output gulp path if no file key
* 			noNode: module not present in node_modules (it was moved in manually) - don't search there
*/
var libs = [
	{ lib: 'marked', childPath: 'lib', varName: 'marked' },
	{ lib: 'jquery', childPath: 'dist', varName: '$' },
	{ lib: 'lodash', childPath: '', varName: '_' }
];

const libTags = 
`<script src="https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/6.6.1/polyfill.min.js"></script>
		<script src="./lib/jquery.js"></script>
		<script src="./lib/lodash.js"></script>
		<script src="./lib/marked.js"></script>
		<link href="https://fonts.googleapis.com/css?family=Roboto:300,400,700" rel="stylesheet" type="text/css">
		<link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">`


module.exports = {
	libTags,
	SRC: {
		root: ['!./node_modules/**', './**'],
		client: ['client/**', '!client/styles/**'],
		clientBuild: ['client/**/*.js', 'client/**/*.jsx', 'client/**/*.json'],
		clientRootHtml: 'client/index.html',
		clientHtml: ['client/**/*.html'],
		clientFonts: ['client/**/*.woff', 'client/**/*.eot', 'client/**/*.ttf'],
		clientImg: ['client/**/*.svg', 'client/**/*.png', 'client/**/*.jpg', 'client/**/*.gif'],
		clientJS: 'client/**/*.js',
		clientLibs: 'client/lib/**',
		rootStyle: 'client/styles/main.scss',
		allStyles: ['client/styles/**/*.css', 'client/styles/**/*.scss', 'client/styles/**/*.sass'],
		// TODO - possibly pull these out
		staticLibs: _.compact(_.map(libs, function(mod) {
			return (mod.noNode)
				? ''
				: path.join('node_modules', mod.lib, mod.childPath, mod.file || mod.lib);
		}))
	},
	DEST: {
		root: '.build',
		clientLibs: 'client/lib',
		libs: '.build/lib',
		img: '.build/img',
		fonts: '.build/fonts',
		styles: '.build/styles',
		multiStartPages: ['.build/fonts', '.build/img', '.build/lib']
	},

	/**
	 * Configure Webpack & Gulp to output a base html file & associated js file, with the page
	 * displaying the given title. Sets express to serve each file & associated js file
	 *
	 * @param {String} basename		name of html file to output. client/index.html is always the input
	 * @param {String} title			title to display in browser at given location
	 * @param {String} jsroot			outputted js file name, in the form: [[entryConfig.jsroot]].js
	 *                          	also the inputted js filename - but with .jsx as the extension
	 * @param {String} folder			path to folder under client containing the js file. Defaults to ./
	 *                            e.g. if folder is 'experiments', & jsroot is 'test1', Webpack will
	 *                             			look for [[projectroot]]/client/experiments/test1.jsx.
	 *
	 * There should only be 1 entry point for most applications.
	 */
	entryPoints: [
		{
			basename: 'admin',
			title: 'Admin',
			jsroot: 'admin'
		},
		{
			basename: 'index',
			title: 'Home',
			jsroot: 'index'
		},
		{
			basename: '404',
			title: '404',
			minimal: true,
			htmlComponent: 'client/components/basic-html/404.html'
		}
	],
	/**
	 * Global libraries loaded in externally, rather than via Webpack (contents in 'libs' var above)
	 */
	webpackExternalModules: _.reduce(libs, function(allExternals, mod) {
		var externalPath = path.join('./lib/', mod.file || mod.lib);
		allExternals[mod.file || mod.lib] = mod.varName;
		allExternals[externalPath] = mod.varName;
		return allExternals;
	}, {})
};
