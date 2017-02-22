// Karma configuration
// Generated on Sun May 01 2016 20:39:58 GMT+0200 (CEST)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [

        'www/libs/jquery.min.js',
        'www/libs/angular.min.js',
        'www/libs/angular-mocks.js',
        'www/libs/angular-touch.min.js',
        'www/libs/angular-route.min.js',
        'www/libs/angular-resource.min.js',
        'www/libs/ui-bootstrap-tpls.min.js',
        'www/**/*.js',
        'test/mongresto/generated.js',
        'test/**/*.spec.js',
        'www/directives/*.html'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'www/directives/*.html': ['ng-html2js']
    },


    ngHtml2JsPreprocessor: {
      // strip this from the file path
      stripPrefix: 'www',
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['mocha'],


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
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
