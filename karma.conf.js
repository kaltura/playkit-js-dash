const webpackConfig = require('./webpack.config')(null, {mode: 'development'});
delete webpackConfig.entry;
delete webpackConfig.externals;
delete webpackConfig.output;
delete webpackConfig.devServer;
webpackConfig.devtool = 'inline-source-map';

module.exports = function (config) {
  config.set({
    frameworks: ['webpack', 'mocha'],
    browserDisconnectTimeout: 60000,
    browserNoActivityTimeout: 60000,
    files: ['tests/index.js'],
    exclude: [],
    preprocessors: {
      'tests/index.js': ['webpack', 'sourcemap']
    },
    reporters: ['mocha'],
    mochaReporter: {
      showDiff: true
    },

    coverageIstanbulReporter: {
      reports: ['lcov', 'text-summary'],
      fixWebpackSourcePaths: true
    },
    webpack: webpackConfig,
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    customLaunchers: {
      ChromeHeadlessWithFlags: {
        base: 'ChromeHeadless',
        flags: ['--no-sandbox', '--autoplay-policy=no-user-gesture-required', '--mute-audio', '--max-web-media-player-count=1000']
      }
    },
    browsers: ['ChromeHeadlessWithFlags'],
    singleRun: true,
    concurrency: Infinity,
    client: {
      mocha: {
        reporter: 'html',
        timeout: 10000
      }
    }
  });
};
