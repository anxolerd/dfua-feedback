const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const env = 'development';

const webpackPath = __dirname;
const rootPath = path.resolve(webpackPath, '..');
const webappPath = path.resolve(rootPath, 'app');
const srcPath = path.join(webappPath, 'src');
const distPath = path.resolve(rootPath, 'public');

module.exports = {
  entry: {
    app: [
      'webpack-dev-server/client?http://localhost:8080',
      path.join(srcPath, 'app.js'),
    ],
    voter: [
      'webpack-dev-server/client?http://localhost:8080',
      path.join(srcPath, 'voter.js'),
    ],
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, '..', 'public'),
    hot: true,
    historyApiFallback: true,
  },
  output: {
    filename: '[name].js',
    path: distPath,
  },
  resolve: {
    alias: {
      config: path.resolve(srcPath, 'config', env),
    },
    extensions: ['.js'],
    modules: [srcPath, 'node_modules', 'node_modules/@polymer'],
  },
  plugins: [
    new CleanWebpackPlugin(['public'], { verbose: true, root: path.resolve(__dirname, '..') }),
    new HtmlWebpackPlugin({
      template: path.resolve(webappPath, 'index.html'),
      chunks: ['app'],
      filename: './index.html'
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(webappPath, 'voter.html'),
      chunks: ['voter'],
      filename: './voter.html'
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
};
