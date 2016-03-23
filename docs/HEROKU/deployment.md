##Remember - to make root paths work:
heroku config:set NODE_PATH=./


Configure Heroku
================
##Settings
heroku config:set NODE_PATH=./
heroku config:set NODE_ENV=staging

##Setup
		heroku addons:create mongolab:sandbox
<!-- heroku plugins:install heroku-redis
		 heroku plugins:install heroku-postgresql
		 heroku addons:create heroku-postgresql		-->

Addons
------
		heroku plugins:install heroku-papertrail
    heroku addons:create papertrail:choklad
    		*   provides long logs

### Papertrail
*   log available at:
				https://addons-sso.heroku.com/apps/flowreach-test-1/addons/papertrail
*   from cli (to get in browser):
    heroku addons:open --app flowreach-test-1 papertrail

# DB setup
<!-- heroku addons:create heroku-postgresql:hobby-dev -->

<!-- *  get db url here:
		heroku config -s | ack postgres -->

Get info
========
## General
		heroku ps

## On a specific app
		heroku ps -a nameofapp

Uninstall
---------
*   example:

				heroku addons:destroy heroku-redis

RUN LOCALLY
===========

		heroku local web

Build
=====
*   get buildpack for mongodb to start:

		heroku buildpacks:add --index 1 https://github.com/PunchTab/heroku-buildpack-mongodb.git

Deploy
======
*   ensure you have at least 1 dyno set up:
				heroku ps:scale web=1

------------------------------------------------------
Procfile drafts
---------------

web: node node_modules/gulp/bin/gulp init-build && export NODE_PATH=$NODE_PATH:./; ./node_modules/pm2/bin/pm2 start app.js --node-args="--harmony_default_parameters --harmony_destructuring --es_staging"; ./node_modules/pm2/bin/pm2 logs app
