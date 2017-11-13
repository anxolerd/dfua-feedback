const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyEsPlugin = require('uglify-es-webpack-plugin');

const webpackPath = __dirname;
const webappPath = path.resolve(webpackPath, '..');
const srcPath = path.join(webappPath, 'src');
const rootPath = path.resolve(webappPath, '..');
const distPath = path.resolve(rootPath, 'public');

module.exports = {
  entry: {
    app: path.join(srcPath, 'app.js'),
  },
  output: {
    filename: '[name].[hash].js',
    path: distPath,
  },
  resolve: {
    alias: {
      config: path.resolve(srcPath, 'config'),
    },
    extensions: ['.js'],
    modules: [srcPath, 'node_modules', 'node_modules/@polymer'],
  },
  plugins: [
    new CleanWebpackPlugin(['public'], { verbose: true, root: path.resolve(__dirname, '..') }),
    new UglifyEsPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(webappPath, 'index.html'),
      chunks: ['app'],
      filename: './index.html'
    }),
    new CopyWebpackPlugin([
      {
        context: path.resolve(rootPath, 'node_modules/@webcomponents/webcomponentsjs/'),
        from: 'webcomponents-*.js',
        to: './wc',
        ignore: ['*.map.js']
      }
    ]),
    new webpack.IgnorePlugin(/vertx/),
    new webpack.HotModuleReplacementPlugin(),
  ]
}