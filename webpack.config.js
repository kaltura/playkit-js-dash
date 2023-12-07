const webpack = require('webpack');
const path = require('path');
const packageData = require('./package.json');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = (env, { mode }) => {
  return {
    entry:  './src/index.ts',
    optimization: {
      minimize: mode !== 'development',
      minimizer: [
        new TerserPlugin({
          extractComments: false,
          terserOptions: {
            format: {
              comments: false
            }
          }
        })
      ]
    },
    // devtool: 'source-map',
    devtool: mode === 'development' ? 'eval-source-map' : 'source-map',
    module: {
      rules: [
        {
          test: /\.(ts|js)$/,
          // test: /\.ts$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [['@babel/preset-env', {
                loose: true,
                bugfixes: true,
                targets: "defaults"
                // targets: {
                //   "browsers": ["chrome >= 47", "firefox >= 51", "ie >= 11", "safari >= 8", "ios >= 8", "android >= 4"]
                // }
              }], '@babel/preset-typescript'],
              plugins: [['@babel/plugin-transform-runtime']]
            }
          }
        },
        {
          test: /\.css$/,
          use: [
            {
              loader: 'style-loader'
            },
            {
              loader: 'css-loader'
            }
          ]
        }
      ]
    },
    resolve: {
      extensions: ['.ts', '.js'],
    },
    output: {
      filename: 'playkit-dash.js',
      path: path.resolve(__dirname, 'dist'),
      library: {
        umdNamedDefine: true,
        name: ['playkit', 'dash'],
        type: 'umd',
      },
      clean: true
      // devtoolModuleFilenameTemplate: './hls/[resource-path]'
    },
    externals: {
      'shaka-player': {
        commonjs: 'shaka-player',
        commonjs2: 'shaka-player',
        amd: 'shaka-player',
        root: ['shaka']
      },
      '@playkit-js/@playkit-js': {root: ['playkit', 'core']}
    },
    devServer: {
      static: {
        directory: path.join(__dirname, 'dist')
      },
      client: {
        progress: true
      }
    },
    plugins: [
      new webpack.DefinePlugin({
        __VERSION__: JSON.stringify(packageData.version),
        __NAME__: JSON.stringify(packageData.name)
      })
    ]
  }
};
