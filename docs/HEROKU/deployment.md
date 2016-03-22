##Remember - to make root paths work:
heroku config:set NODE_PATH=./

##Settings
heroku config:set NODE_PATH=./
heroku config:set NODE_ENV=staging

##Setup
heroku plugins:install heroku-redis
heroku plugins:install heroku-postgresql

## Addons:
-   heroku addons:create heroku-postgresql
-   heroku addons:create heroku-postgresql

web: node node_modules/gulp/bin/gulp init-build && export NODE_PATH=$NODE_PATH:./; ./node_modules/pm2/bin/pm2 start app.js --node-args="--harmony_default_parameters --harmony_destructuring --es_staging"; ./node_modules/pm2/bin/pm2 logs app