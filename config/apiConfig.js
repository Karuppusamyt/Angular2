/**
 * Created by rr4 on 10/20/2016.
 The environment specific server configs go here
 */

var setupAPI = function () {
  var apiHost;
  switch (process.env.NODE_ENV) {
    case 'qa':
      apiHost = 'myQaServer/api';
      break;
    case 'development':
      apiHost = 'myDevServer/api';
      break;
    case 'production':
      apiHost = 'myProdServer/api';
      break;
    default:
      apiHost = 'myDefaultServer/api';
  }
  console.log('apiConfig: ', process.env.NODE_ENV);
  console.log('apiHost is : ', apiHost);
  return apiHost;
};

module.exports = setupAPI();
