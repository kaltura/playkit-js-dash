'use strict';

const webpack = require("webpack");
const path = require("path");
const PROD = (process.env.NODE_ENV === 'production');

module.exports = {
  context: __dirname + "/src",
  entry: PROD ? {"playkit-dash.min": "dash-adapter.js"} : {"playkit-dash": "dash-adapter.js"},
  output: {
    path: __dirname + "/dist",
    filename: '[name].js',
    library: "PlaykitJsDash",
    libraryTarget: "umd",
    devtoolModuleFilenameTemplate: "webpack:///dash/[resource-path]",
  },
  devtool: 'source-map',
  plugins: PROD ? [new webpack.optimize.UglifyJsPlugin({sourceMap: true})] : [],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [{
          loader: "babel-loader"
        }],
        exclude: [
          /node_modules/
        ]
      },
      {
        test: /\.js$/,
        exclude: [
          /node_modules/
        ],
        enforce: 'pre',
        use: [{
          loader: 'eslint-loader',
          options: {
            rules: {
              semi: 0
            }
          }
        }],
      }
    ]
  },
  devServer: {
    contentBase: __dirname + "/src"
  },
  resolve: {
    modules: [
      path.resolve(__dirname, "src"),
      "node_modules"
    ]
  },
  externals: {
    "playkit-js": {
      commonjs: "playkit-js",
      commonjs2: "playkit-js",
      amd: "playkit-js",
      root: "Playkit"
    },
    "shaka-player": {
      commonjs: "shaka-player",
      commonjs2: "shaka-player",
      amd: "shaka-player",
      root: "shaka"
    }
  }
};
