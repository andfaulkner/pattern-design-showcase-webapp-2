//Fix root path referenced by require
require('rootpath')();
require('trace');
require('clarify');
require('colors');
var path = require('path');
var _ = require('lodash');
var inspect = require('util').inspect;
var es = require('event-stream');
var gulp = require('gulp');

var buildConfig = require('./config/config-build-paths');
var webpackConfig = require('./webpack.config.js');

//NODE MODULES & JS LIBRARIES
var yargs   = require('yargs');

require('shelljs/global');

var p = require('gulp-packages')(gulp, [
	'clone',										// clone a gulp stream
	'debug',                    // lists all files run thru it
	'dev',                      // Toggle html comments on & off
	'display-help',             // Display help file
	'dust',                     // Compile Dust templates
	'exit',                     // Force quit Gulp process
	'filter',                   // Filter out unwanted files from stream
	'flatten',									// Copy without relative paths
	'if-else',                  // if-else statements mid-stream
	'multistream',
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
	'template',
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
	return gulp.src(SRC.rootStyle)
		.pipe(newerThanRootIfNotProduction())
		.pipe(p.sass().on('error', p.sass.logError))
		.pipe(consoleTaskReport())
		.pipe(gulp.dest(DEST.styles));
});

function copyFiles(gulp, srcFiles, destFiles, shouldFlatten, stepInject) {
	return gulp.src(srcFiles)
		.pipe(newerThanRootIfNotProduction())
		.pipe(consoleTaskReport())
		.pipe(shouldFlatten ? p.flatten() : gutil.noop())
		.pipe(stepInject ? stepInject() : gutil.noop())
		.pipe(gulp.dest(destFiles));
}

/**
 * Main frontend build step
 */
gulp.task('webpack', copyFiles.bind(this, gulp, SRC.clientJS, DEST.root, false,
																		_.partial(p.webpack, webpackConfig)));

/**
 * Copy new libs from node_modules to client/lib. Runs once on re-run.
 */
gulp.task('node-client-libs', copyFiles.bind(this, gulp, SRC.staticLibs, DEST.clientLibs));
/*
 * move fonts into .build (from client)
 */
gulp.task('copy-fonts', copyFiles.bind(this, gulp, SRC.clientFonts, DEST.fonts, true, false));
/*
 * move images into .build (from client)
 */
gulp.task('copy-img', copyFiles.bind(this, gulp, SRC.clientImg, DEST.img, true, false));
/*
 * copy from client/libs --> ./build/libs [[todo: may be redundant, look into it]]
 */
gulp.task('node-libs', copyFiles.bind(this, gulp, path.join('./', SRC.clientLibs), DEST.libs));

/*
 * grab index.html form client, render to 3 separate index files, output to build
 */
gulp.task('create-index-html', function copyStaticTask(){
	var outStream = gulp.src(SRC.clientRootHtml)
		.pipe(consoleTaskReport())
		.pipe(newerThanRootIfNotProduction());

	var adminHtmlOut = outStream.pipe(p.clone())
		.pipe(p.rename(function(path) { path.basename = 'admin'; }))
		.pipe(p.template({
			title: 'Admin',
			jsroot: 'admin.js'
		}));
	var todoHtmlOut = outStream.pipe(p.clone())
		.pipe(p.rename(function(path) { path.basename = 'index-todo'; }))
		.pipe(p.template({
			title: 'Todo',
			jsroot: 'index-todo.js'
		}));
	outStream.pipe(p.template({
		title: 'Home',
		jsroot: 'index.js'
	}));

	return es.merge(todoHtmlOut, adminHtmlOut, outStream)
		.pipe(gulp.dest(DEST.root));
});

var rerunOnChange = function rerunOnChange() {
	gulp.watch(SRC.client, ['build']);
};

/**
 * Full build cycle
 */
gulp.task('build', [
	'webpack',			
	'node-libs',		'copy-img',
	'copy-fonts',		'create-index-html',
	'sass'
]);

/**
 * Build the app
 */
gulp.task('default', ['node-client-libs', 'build'], function(){
	return rerunOnChange();
});
