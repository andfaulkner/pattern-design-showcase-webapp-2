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
	{ lib: 'react', childPath: 'dist', varName: 'React', file: 'react-with-addons'},
	{ lib: 'react-dom', childPath: 'dist', varName: 'ReactDOM' },
	{ lib: 'jquery', childPath: 'dist', varName: '$' },
	{ lib: 'lodash', childPath: '', varName: '_' },
	{ lib: 'react-router', varName: 'ReactRouter', noNode: true }
];

module.exports = {
	SRC: {
		root: ['!./node_modules/**', './**'],
		client: 'client/**',
		clientRootHtml: 'client/*.html',
		clientImg: 'client/**/*.svg',
		clientJS: 'client/**/*.js',
		clientStaticNoLib: 'index.html',
		clientStatic: [
			'client/**', 
			'!client/lib/*.js',
			'!client/**/*.dust',
			'!client/**/*.jsx',
			'!./**/.eslintrc.js'
		],
		clientLibs: 'client/lib/**',
		// TODO - possibly pull these out
		staticLibs: _.compact(_.map(libs, function(mod) {
			return (mod.noNode)
				? ''
				: path.join('node_modules', mod.lib, mod.childPath, (mod.file || mod.lib));
		}))
	},
	DEST: {
		root: '.build',
		clientLibs: 'client/lib',
		libs: '.build/lib',
		img: '.build/img'
	},
	// TODO - possibly pull these out
	webpackExternalModules: _.reduce(libs, function(allExternals, mod) {
		var externalPath = path.join('./lib/', mod.file || mod.lib);
		allExternals[mod.file || mod.lib] = mod.varName;
		allExternals[externalPath] = mod.varName;
		console.log(allExternals);
		return allExternals;
	}, {})
};