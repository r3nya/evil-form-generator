const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const ConfigPlugin = require('webpack-config-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
  entry: [
    './src/index.js',
    'normalize.css',
    'font-awesome/css/font-awesome.min.css'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/',
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new ConfigPlugin({ dir: path.join(__dirname, 'config') }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new ExtractTextPlugin('app.css', {
      allChunks: true
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        screw_ie8: true,
        warnings: false,
      },
    }),
  ],
  module: {
    loaders: [
      { test: /\.js$/, loaders: ['babel'], exclude: /node_modules/ },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract(
          'style',
          'css?importLoaders=2&localIdentName=[local]---[name]---[hash:base64:5]!postcss'
        )
      },
      {
        test: /\.(png|jpg|gif|svg|woff|woff2|eot|ttf)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&name=[name]-[hash].[ext]'
      }
    ]
  },
  postcss: [
    autoprefixer({ browsers: ['last 2 versions'] }),
    require('postcss-nested'),
    require('postcss-import'),
    require('postcss-simple-vars'),
    require('postcss-apply'),
    require('postcss-mixins')
  ],
  resolve: {
    extensions: ['', '.js', '.json'],
    alias: {
      'api': path.join(__dirname, 'src/api'),
      'store': path.join(__dirname, 'src/store'),
      'utils': path.join(__dirname, 'src/utils'),
      'actions': path.join(__dirname, 'src/actions'),
      'reducers': path.join(__dirname, 'src/reducers'),
      'selectors': path.join(__dirname, 'src/selectors'),
      'constants': path.join(__dirname, 'src/constants'),
      'containers': path.join(__dirname, 'src/containers'),
      'components': path.join(__dirname, 'src/components'),
    }
  }
};
