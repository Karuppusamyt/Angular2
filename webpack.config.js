/**
 * @author: @AngularClass
 */

// Look in ./config folder for webpack.dev.js
var env = require('./env');

// List of allowed environments
var allowedEnvs = ['dev', 'test', 'ci', 'qa', 'uat', 'production'];

/**
 * Get an allowed environment
 * @param  {String}  env
 * @return {String}
 */
function getValidEnv(env) {
  var isValid = env && env.length > 0 && allowedEnvs.indexOf(env) !== -1;
  return isValid ? env : 'dev';
}

/**
 * Build the webpack configuration
 * @param  {String} env Environment to use
 * @return {Object} Webpack config
 */
function buildConfig(env) {
  var usedEnv = getValidEnv(env);
  var config;
  switch (usedEnv) {
    case 'production':
      console.log("ENV IS: ", process.env.NODE_ENV);
      config = require('./config/prod.js')({env: 'production'});
      break;
    case 'qa':
      console.log("ENV IS: ", process.env.NODE_ENV);
      config = require('./config/qa.js')({env: 'qa'});
      break;
    case 'test':
      console.log("ENV IS: ", process.env.NODE_ENV);
      config = require('./config/test.js')({env: 'test'});
      break;
    case 'dev':
      console.log("ENV IS: ", process.env.NODE_ENV);
      config = require('./config/dev.js')({env: 'development'});
      break;
    default:
      console.log("ENV IS default: ", process.env.NODE_ENV);
      config = require('./config/dev.js')({env: 'development'});
      break;
  }
  return config;
}

module.exports = buildConfig(env);
