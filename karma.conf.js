// Karma configuration
// Generated on Thu Oct 04 2018 19:59:17 GMT-0500 (Hora de verano central (México))
const webpack = require("./webpack.config.js");

module.exports = function(config) {
  config.set({
    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: "",

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ["jasmine"],

    // list of files / patterns to load in the browser
    files: ["./spec/*spec.js", "./app/einapage"],

    // list of files / patterns to exclude
    exclude: [],

    webpack,

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      "./spec/*spec.js": ["webpack"],
      "./app/einapage": ["webpack"],
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ["progress", "kjhtml", "coverage-istanbul", "coveralls"],
    coverageIstanbulReporter: {
      reports: ["html", "lcov", "text-summary"],
      dir: "./coverage",
      fixWebpackSourcePaths: true,
      reports: ["cobertura", "lcov", "text", "text-summary"],
      skipFilesWithNoCoverage: true,
    },
    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ["Firefox", "Chrome"],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,
  });
};
