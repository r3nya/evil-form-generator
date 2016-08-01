const path = require('path');
const webpack = require('webpack');
const ConfigPlugin = require('webpack-config-plugin');
const autoprefixer = require('autoprefixer');
const ProgressBar = require('nyan-progress-webpack-plugin');


module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './src/index',
    'normalize.css',
    'font-awesome/css/font-awesome.min.css'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ConfigPlugin({ dir: path.join(__dirname, 'config') }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
    new ProgressBar()
  ],
  module: {
    loaders: [
      { test: /\.js$/, loaders: ['babel'], exclude: /node_modules/ },
      {
        test: /\.css$/,
        loaders: [
          'style?sourceMap',
          'css?importLoaders=2&localIdentName=[name]__[local]___[hash:base64:5]',
          'postcss'
        ]
      },
      {
        test: /\.(png|jpg|gif|svg|woff|woff2|eot|ttf)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=500000&name=[name]-[hash].[ext]'
      },
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
