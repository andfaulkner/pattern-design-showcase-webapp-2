//Fix root path referenced by require
require('rootpath')();
require('trace');
require('clarify');
require('colors');
var path = require('path');
var buildConfig = require('./config/config-build-paths');

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
	'flatten',									// Copy without relative paths
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
var SRC = buildConfig.SRC;
var DEST = buildConfig.DEST;
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

/**
 * Copy new libs from node_modules to client/lib. Runs once on re-run.
 */
gulp.task('sass', function staticLibsTask() {
	return gulp.src(SRC.styles)
		.pipe(newerThanRootIfNotProduction())
		.pipe(consoleTaskReport())
		.pipe(p.sass())
		.pipe(gulp.dest(DEST.styles));
});

/**
 * Copy new libs from node_modules to client/lib. Runs once on re-run.
 */
gulp.task('node-client-libs', function staticLibsTask() {
	return gulp.src(SRC.staticLibs)
		.pipe(newerThanRootIfNotProduction())
		.pipe(consoleTaskReport())
		.pipe(gulp.dest(DEST.clientLibs));
});

/**
 * Main frontend build step
 */
gulp.task('webpack', function webpackTask() {
	return gulp.src(SRC.clientJS)
		.pipe(consoleTaskReport())
		.pipe(newerThanRootIfNotProduction())
		.pipe(p.webpack(require('./webpack.config.js')))
		.pipe(gulp.dest(DEST.root));
});

/*
 * move images into .build (from client)
 */
gulp.task('copy-fonts', function copyStaticTask(){
	return gulp.src(SRC.clientFonts)
		.pipe(consoleTaskReport())
		.pipe(newerThanRootIfNotProduction())
		.pipe(p.flatten())
		.pipe(gulp.dest(DEST.fonts));
});

/*
 * move images into .build (from client)
 */
gulp.task('copy-img', function copyStaticTask(){
	return gulp.src(SRC.clientImg)
		.pipe(consoleTaskReport())
		.pipe(newerThanRootIfNotProduction())
		.pipe(p.flatten())
		.pipe(gulp.dest(DEST.img));
});

/*
 * move root html files from client to .build
 */
gulp.task('copy-static', function copyStaticTask(){
	return gulp.src(SRC.clientRootHtml)
		.pipe(consoleTaskReport())
		.pipe(newerThanRootIfNotProduction())
		.pipe(gulp.dest(DEST.root));
});

/*
 * copy from client/libs --> ./build/libs [[todo: may be redundant, look into it]]
 */
gulp.task('node-libs', function staticLibsTask() {
	return gulp.src(path.join('./', SRC.clientLibs))
		.pipe(newerThanRootIfNotProduction())
		.pipe(consoleTaskReport())
		.pipe(gulp.dest(DEST.libs));
});

var rerunOnChange = function rerunOnChange() {
	gulp.watch(SRC.client, ['build']);
};

gulp.task('build', ['node-libs', 'sass', 'webpack', 'copy-img', 'copy-fonts', 'copy-static']);

/**
 * Build the app
 */
gulp.task('default', ['node-client-libs', 'build'], function(){
	return rerunOnChange();
});
