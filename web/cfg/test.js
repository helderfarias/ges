var path = require('path');
var srcPath = path.join(__dirname, '/../src/js/');
var BowerWebpackPlugin = require('bower-webpack-plugin');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  module: {
    loaders: [
      {
        test: /\.(png|jpg|gif|woff|woff2|css|sass|scss|less|styl)$/,
        loader: 'null-loader'
      },
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        include: [
          path.join(__dirname, '/../src'),
          path.join(__dirname, '/../test')
        ]
      },
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        include: [
          path.join(__dirname, '/../src')
        ],
        loader: 'isparta'
      }
    ]
  },
  resolve: {
    extensions: [ '', '.js', '.jsx' ],
    alias: {
      actions: srcPath + 'actions/',
      helpers: path.join(__dirname, '/../test/helpers'),
      components: srcPath + 'components',
      services: srcPath + 'services',
      stores: srcPath + 'stores',
      styles: srcPath + 'css',
      config: srcPath + 'config/' + process.env.REACT_WEBPACK_ENV
    }
  },
  plugins: [
    new webpack.ProvidePlugin({
        $:      "jquery",
        jQuery: "jquery"
    }),
    new BowerWebpackPlugin({
      excludes: /.*\.less/,
      searchResolveModulesDirectories: false
    })
  ]
};
