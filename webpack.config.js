const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ProgressBar = require('nyan-progress-webpack-plugin');

const TARGET = process.env.npm_lifecycle_event;

// Common path
const common = {
  entry: [
    './src/index.js',
    'normalize.css'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/',
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ],
  module: {
    loaders: [
      { test: /\.js$/, loaders: ['babel'], exclude: /node_modules/ }
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
    root: [
       path.resolve(__dirname, 'src')
    ]
  }
};

if (TARGET === 'start') {
  module.exports = merge(common, {
    devtool: 'cheap-module-eval-source-map',
    entry: [
      'webpack-hot-middleware/client'
    ],
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new ProgressBar()
    ],
    module: {
      loaders: [
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
  });
}

if (TARGET === 'build') {
  module.exports = merge(common, {
    plugins: [
      new webpack.optimize.OccurenceOrderPlugin(),
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
    }
  });
}
