const helpers = require('./helpers');
const webpackMerge = require('webpack-merge'); // used to merge webpack configs
const commonConfig = require('./base.js'); // the settings that are common to prod and dev

/**
 * Webpack Plugins
 */
const ProvidePlugin = require('webpack/lib/ProvidePlugin');
const DefinePlugin = require('webpack/lib/DefinePlugin');
const NormalModuleReplacementPlugin = require('webpack/lib/NormalModuleReplacementPlugin');
const IgnorePlugin = require('webpack/lib/IgnorePlugin');
const DedupePlugin = require('webpack/lib/optimize/DedupePlugin');
const UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');
const WebpackMd5Hash = require('webpack-md5-hash');

/**
 * Webpack Constants
 */
const ENV = process.env.NODE_ENV = process.env.ENV = 'qa';
const API_URL = process.env.API_URL = require('./apiConfig');
const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 8080;
const METADATA = webpackMerge(commonConfig({env: ENV}).metadata, {
  host: HOST,
  port: PORT,
  ENV: ENV,
  HMR: false,
  API_URL: API_URL
});

module.exports = function(env) {
  console.log("IN QA FILE ", process.env.NODE_ENV);
  return webpackMerge(commonConfig({env: ENV}), {
    debug: false,
    devtool: 'source-map',
    output: {
      path: helpers.root('dist'),
      filename: '[name].[chunkhash].bundle.js',
      sourceMapFilename: '[name].[chunkhash].bundle.map',
      chunkFilename: '[id].[chunkhash].chunk.js'
    },
    plugins: [
      new WebpackMd5Hash(),

      new DefinePlugin({
        'ENV': JSON.stringify(METADATA.ENV),
        'HMR': METADATA.HMR,
        'process.env': {
          'ENV': JSON.stringify(METADATA.ENV),
          'NODE_ENV': JSON.stringify(METADATA.ENV),
          'HMR': METADATA.HMR
        },
        'API_URL': JSON.stringify(METADATA.API_URL)
      }),

      /**
       * Plugin: UglifyJsPlugin
       * Description: Minimize all JavaScript output of chunks.
       * Loaders are switched into minimizing mode.
       *
       * See: https://webpack.github.io/docs/list-of-plugins.html#uglifyjsplugin
       */
      // NOTE: To debug prod builds uncomment //debug lines and comment //prod lines
      new UglifyJsPlugin({
        beautify: true, //debug
        mangle: false, //debug
        dead_code: false, //debug
        unused: false, //debug
        deadCode: false, //debug
        compress: {
          screw_ie8: true,
          keep_fnames: true,
          drop_debugger: false,
          dead_code: false,
          unused: false
        }, // debug
        comments: true //debug
        //
        //
        // beautify: false, //prod
        // mangle: { screw_ie8 : true, keep_fnames: true }, //prod
        // compress: { screw_ie8: true }, //prod
        // comments: false //prod
      }),

      /**
       * Plugin: NormalModuleReplacementPlugin
       * Description: Replace resources that matches resourceRegExp with newResource
       *
       * See: http://webpack.github.io/docs/list-of-plugins.html#normalmodulereplacementplugin
       */

      /**
       * Plugin: IgnorePlugin
       * Description: Don’t generate modules for requests matching the provided RegExp.
       *
       * See: http://webpack.github.io/docs/list-of-plugins.html#ignoreplugin
       */

      // new IgnorePlugin(/angular2-hmr/),

      /**
       * Plugin: CompressionPlugin
       * Description: Prepares compressed versions of assets to serve
       * them with Content-Encoding
       *
       * See: https://github.com/webpack/compression-webpack-plugin
       */
      //  install compression-webpack-plugin
      // new CompressionPlugin({
      //   regExp: /\.css$|\.html$|\.js$|\.map$/,
      //   threshold: 2 * 1024
      // })

    ],

    tslint: {
      emitErrors: true,
      failOnHint: true,
      resourcePath: 'src'
    },

    /**
     * Html loader advanced options
     *
     * See: https://github.com/webpack/html-loader#advanced-options
     */
    // TODO: Need to workaround Angular 2's html syntax => #id [bind] (event) *ngFor
    htmlLoader: {
      minimize: true,
      removeAttributeQuotes: false,
      caseSensitive: true,
      customAttrSurround: [
        [/#/, /(?:)/],
        [/\*/, /(?:)/],
        [/\[?\(?/, /(?:)/]
      ],
      customAttrAssign: [/\)?\]?=/]
    },

    /*
     * Include polyfills or mocks for various node stuff
     * Description: Node configuration
     *
     * See: https://webpack.github.io/docs/configuration.html#node
     */
    node: {
      global: 'window',
      crypto: 'empty',
      process: false,
      module: false,
      clearImmediate: false,
      setImmediate: false
    }

  });
};
