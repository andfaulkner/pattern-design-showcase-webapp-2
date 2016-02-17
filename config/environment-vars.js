var env = process.env.NODE_ENV = process.env.NODE_ENV || "development"; //can also be 'production'
var logLevel = process.env.LOG_LEVEL = process.env.LOG_LEVEL || "info";

module.exports = {
  env: env,
  logLevel: logLevel,
};