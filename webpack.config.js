'use strict';

const webpack = require("webpack");
const path = require("path");
const packageData = require("./package.json");

let plugins = [
  new webpack.DefinePlugin({
    __VERSION__: JSON.stringify(packageData.version),
    __NAME__: JSON.stringify(packageData.name)
  })
];

module.exports = {
  context: __dirname + "/src",
  entry: {"playkit-dash": "index.js"},
  output: {
    path: __dirname + "/dist",
    filename: '[name].js',
    library: ["playkit", "adapters", "dash"],
    libraryTarget: "umd",
    devtoolModuleFilenameTemplate: "./adapters/dash/[resource-path]",
  },
  devtool: 'source-map',
  plugins: plugins,
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: [
        "babel-loader",
        "eslint-loader",
      ]
    }]
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
      root: ["playkit", "core"]
    },
    "shaka-player": {
      commonjs: "shaka-player",
      commonjs2: "shaka-player",
      amd: "shaka-player",
      root: "shaka"
    }
  }
};
