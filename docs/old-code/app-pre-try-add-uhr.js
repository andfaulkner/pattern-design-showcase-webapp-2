var path = require('path');
require('app-module-path').addPath(path.join(__dirname, './'));
// import { _ } from './lib/lodash'; // special lodash import with lodash v3's aliases re-included
import { middlewares } from './server/middlewares';

// server itself
var koa = require('koa');
var app = koa();

// application configuration object
var config = require('config');

//**************************** LOGGING ****************************//
// standard winston logger
var logger = require('server/core/logger').file('app.js');
// set up the koa logger if koaLog config option is set
if (config.get('logging')['koaLog']) {
	var koaLogger = require('koa-logger');
	app.use(koaLogger());
}
var util = require('util');

logger.debug('app configuration: \n' + util.inspect(config, {colors: true, depth: 10}) + '\n');
//*****************************************************************//

//**************************** HOTLOADING ****************************//
var webpackMiddleware = require('koa-webpack-dev-middleware');
var webpack = require('webpack');
var webpackConfig = require('./webpack.config.babel.js');
var compiler = webpack(webpackConfig);
app.use(webpackMiddleware(compiler, { noInfo: false }));

app.use(require('koa-webpack-hot-middleware')(compiler));
//********************************************************************//

//**************************** MIDDLEWARES ****************************//
app = middlewares(app);
//*********************************************************************//

app.listen(config.get('server').port);
