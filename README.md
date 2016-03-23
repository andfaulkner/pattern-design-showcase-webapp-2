Database
========
*   Main persistence: MongoDB
	*   ODM / Mongo webdriver: Mongoose
*   Session storage & caching: Redis

Backend frameworks
==================
*   Backend framework: ExpressJS
*   REST API: express-restify-mongoose

Frontend frameworks
===================
*   UI: ReactJS
*   Client data store: Redux
*   Extra UI components: React-Bootstrap
*   Client-side routing: React-Router
*   Inline styling: Radium
*   General styling: SCSS (using inline for everything is silly)
*   cross-browser styling: normalize.css

Build tools
===========
*   Task runner: Gulp
*   Frontend build: Webpack
*   Transpiler: Babel (ES6 --> ES5)
*   Dev server persistence: nodemon
*   ESLint
*   production build tools: jsmin

Authentication
==============
*   PassportJS
*   Google OAuth2
*   cookie-parser
*   express-session

Utility libs
============
*   universal (used front & backend): lodash
*   frontend-only: jQuery
*   promises: bluebird
*   configuration management: config

Logging
=======
*   backend logging: Winston
*   stacktrace cleaners: trace, clarify
*   pm2 logs
*   frontend data store tracing: redux-devtools
*   UI component hierarchy tracing: react browser plugin
*   

Deployment
==========
*   Deploying to Heroku
*   Using Procfile & package.json hooks
*   server persistence: pm2
