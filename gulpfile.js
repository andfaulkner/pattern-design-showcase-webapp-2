//Fix root path referenced by require
require('rootpath')();
require('trace');
require('clarify');
require('colors');

var gulp = require('gulp');

//NODE MODULES & JS LIBRARIES
var yargs   = require('yargs');

require('shelljs/global');

var p = require('gulp-packages')(gulp, [
	'debug',                    // lists all files run thru it
	'dev',                      // Toggle html comments on & off
	'display-help',             // Display help file
	'dust',                     // Compile Dust templates
	'exit',                     // Force quit Gulp process
	'filter',                   // Filter out unwanted files from stream
	'if-else',                  // if-else statements mid-stream
	'newer',                    // Only push item through pipe if newer
	'plumber',                  // keep running if error occurs
	'print',                    // output errors to console
	'rename',                   // Rename files
	'replace',                  // find-and-replace text in files
	'rimraf',                   // remove files
	'sass',                     // compile scss and sass --> css
	'shell',                    // run shell commands with gulp
	'size',                     // output file size
	'stats',                    // provides stats on files passed thru stream
	'tap',                      // run function mid-stream
	'webpack'                   // compile webpack
]);

//UNPACKAGEABLE GULP PLUGINS
var gutil = require('gulp-util');
var lazypipe = require('lazypipe');
var runSequence = require('run-sequence');
// var livereload = require('gulp-livereload');
// var notify = require('gulp-notify');
// var wait = require('gulp-wait');

//------------------------------ CONSTANTS -------------------------------//
var SRC = {
	root: ['!./node_modules/**', './**'],
	client: 'client/**',
	clientJS: 'client/**/*.js',
	clientStaticNoLib: 'index.html',
	// [
	// 	'!*.js', '!client/lib/**/*.js',
	// 	'!client/**/*.dust', '!client/**/*.jsx',
	// 	'!./**/.eslintrc.js', 'client/**'
	// ],
	clientStatic: [
		'client/**', 
		'!client/lib/*.js',
		'!client/**/*.dust',
		'!client/**/*.jsx',
		'!./**/.eslintrc.js'
	],
	nodeLibs: [
		'node_modules/marked/marked.min.js',
		'node_modules/react/dist/react.min.js',
		'node_modules/react-dom/dist/react-dom.min.js',		
		'node_modules/react-bootstrap/dist/react-bootstrap.min.js',
		'node_modules/lodash/dist/lodash.js',
		'node_modules/jquery/dist/jquery.min.js'
	]
};

var DEST = {
	root: '.build',
	libs: '.build/lib'
};
//------------------------------------------------------------------------//

//------------------ COMMAND LINE PARAMETER HANDLING ---------------------//
//Command line flags accepted by gulp
var cmds = ['test', 'production', 'stats', 'once'];

/**
 * Populate args object w/ command line args, setting each that was received to
  * true in the args object, & all others to false. Referenced by argument name.
  * @example args.production set to true if gulp launched w/ gulp --production.
  */
var args = (function populateArgs(argList, argObj){
	argList.forEach(function createArgObjFromArgArray(arg){
		argObj[arg] = yargs.argv[arg] === true;
	});
	return argObj;
}(cmds, {}));
//------------------------------------------------------------------------//

//------------------------------------------ UTILITIES -----------------------------------------//
/**
 * Output webpack errors when caught.
 */
var onError = function onError(err) {
	gutil.beep();
	console.log(gutil.colors.red.bgWhite('-----------------------------------'));
	console.log('ERROR OCCURRED');
	console.log(typeof err);
	console.log(gutil.colors.red.bgWhite(err.toString()));
	console.log(gutil.colors.red.bgWhite('-----------------------------------'));
	this.emit('restart');
	this.emit('end');
};
//----------------------------------------------------------------------------------------------//

//################################################################################
//#~~~~~~~~~~~~~~~~~~~~~~~~~~~ REUSABLE PIPE COMPONENTS ~~~~~~~~~~~~~~~~~~~~~~~~~~
//################################################################################
var catchErrors = lazypipe()
	.pipe(p.plumber, { errorHandler: onError });

var consoleTaskReport = lazypipe()
	.pipe(catchErrors)
	.pipe(p.print);

var newerThanRootIfNotProduction = lazypipe()
	.pipe(p.ifElse, !args.production, p.newer.bind(this, DEST.root));
//#################################################################################

//################################################################################
//#~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ LIST ALL GULP TASKS ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//################################################################################
gulp.task('get-tasks', function() {
	return process.nextTick(function() {
		console.log('\n_________ALL REGISTERED GULP TASKS_________');
		Object.keys(gulp.tasks).forEach(function(t) {
			return t === 'install' || t === 'uninstall'
				? null
				: console.log('-- ' + t.bgBlack.green);
		});
		console.log('___________________________________________\n');
	});
});
//#################################################################################

gulp.task('webpack', function webpackTask() {
	return gulp.src(SRC.clientJS)
		.pipe(consoleTaskReport())
		.pipe(newerThanRootIfNotProduction())
		.pipe(p.webpack(require('./webpack.config.js')))
		.pipe(gulp.dest(DEST.root));
});

gulp.task('copy-static', function copyStaticTask(){
	return gulp.src(SRC.clientStaticNoLib)
		.pipe(consoleTaskReport())
		.pipe(newerThanRootIfNotProduction())
		.pipe(gulp.dest(DEST.root));
});

gulp.task('node-libs', function nodeLibsTask() {
	return gulp.src(SRC.nodeLibs)
		.pipe(newerThanRootIfNotProduction())
		.pipe(consoleTaskReport())
		.pipe(gulp.dest(DEST.libs));
});

gulp.task('new-lib', function copyStaticTask(){
	return gulp.src(SRC.clientStatic)
		.pipe(consoleTaskReport())
		.pipe(newerThanRootIfNotProduction())
		.pipe(gulp.dest(DEST.root));
});

var rerunOnChange = function rerunOnChange() {
	gulp.watch(SRC.client, ['build']);
};

gulp.task('build', function(){ return runSequence('webpack', 'node-libs', 'copy-static'); });

/**
 * Build the app
 */
gulp.task('default', ['build'], function(){
	return rerunOnChange();
});
