const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ProgressBar = require('nyan-progress-webpack-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');

const TARGET = process.env.npm_lifecycle_event;

const cssLoaders = [
  {
    loader: 'css-loader',
    options: {
      importLoaders: 2,
      localIdentName: '[local]---[name]---[hash:base64:5]'
    }
  },
  {
    loader: 'postcss-loader'
  }
];


// Common part
const common = {
  entry: {
    vendor: [
      'camelcase',
      'classnames',
      'react',
      'react-dom',
      'react-redux',
      'redux',
      'reselect'
    ],
    main: [
      './src/js/index.js',
      './src/css/main.css',
      'font-awesome/css/font-awesome.css',
      'open-sans-fontface/open-sans.css',
      'normalize.css'
    ],
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/',
  },
  plugins: [
    new CaseSensitivePathsPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.bundle.js'
    }),
  ],
  module: {
    rules: [
      { test: /\.js$/, rules: ['babel'], exclude: /node_modules/ }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.json'],
    root: [
       path.resolve(__dirname, './src/js')
    ]
  }
};

if (TARGET === 'start') {
  module.exports = merge(common, {
    devtool: 'cheap-module-eval-source-map',
    entry: {
      main: [
        'webpack-hot-middleware/client'
      ]
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new ProgressBar(),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('development')
      })
    ],
    module: {
      rules: [
        {
          test: /\.css$/,
          rules: [
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
      new ExtractTextPlugin({
        filename: 'app.css',
        disable: false,
        allChunks: true
      }),
      new webpack.optimize.UglifyJsPlugin({
        compressor: {
          screw_ie8: true,
          warnings: false,
        },
      }),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production')
      })
    ],
    module: {
      rules: [
        {
          test: /\.css$/,
          loader: ExtractTextPlugin.extract({
            fallbackLoader: 'style-loader',
            loader: cssLoaders
          })
        },
        {
          test: /\.(png|jpg|gif|svg|woff|woff2|eot|ttf)(\?v=\d+\.\d+\.\d+)?$/,
          loader: 'url?limit=10000&name=[name]-[hash].[ext]'
        }
      ]
    }
  });
}
