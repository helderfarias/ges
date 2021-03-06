var path = require('path');
var webpack = require('webpack');
var _ = require('lodash');
var baseConfig = require('./base');
var BowerWebpackPlugin = require('bower-webpack-plugin');

var config = _.merge({
  entry: path.join(__dirname, '../src/js/main'),
  cache: false,
  devtool: 'sourcemap',
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    }),
    new BowerWebpackPlugin({
      excludes: /.*\.less/,
      searchResolveModulesDirectories: false
    }),
    new webpack.ProvidePlugin({
      $:      "jquery",
      jQuery: "jquery"
    }),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.NoErrorsPlugin()
  ]
}, baseConfig);

config.module.loaders.push({
  test: /\.(js|jsx)$/,
  loader: 'babel',
  include: path.join(__dirname, '/../src')
});

module.exports = config;
