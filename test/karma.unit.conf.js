/*jshint node:true */

'use strict';

var settings = require('./common/karma.conf');

module.exports = function(config) {

    config.set({

        basePath: settings.basePath,

        files: settings.filesForUnitTests(),

        frameworks: settings.frameworks,

        browsers: ['PhantomJS'],

        reporters: ['progress', 'coverage', 'notify', 'junit'],

        preprocessors: {
            // source files, that you wanna generate coverage for
            // do not include tests or libraries
            // (these files will be instrumented by Istanbul)
            'src/notification*.js': ['coverage'],
            'src/_module.js': ['coverage']
        },

        coverageReporter: {
            type: 'lcov',
            dir: 'reports/unit/coverage',
            includeAllSources: true
        },

        junitReporter: {
            outputFile: 'reports/unit/unit-test-results.xml',
            suite: ''
        },

        files: [
          'bower_components/angular/angular.js',
          'bower_components/angular-ui-router/release/angular-ui-router.js',
          'bower_components/angular-cache/dist/angular-cache.min.js',
          'bower_components/angular-translate/angular-translate.min.js',
          'bower_components/angular-translate-loader-static-files/angular-translate-loader-static-files.min.js',
          'bower_components/angular-dynamic-locale/dist/tmhDynamicLocale.js',
          'bower_components/lodash/lodash.min.js',
          'bower_components/lodash/dist/lodash.js',
          'bower_components/restangular/dist/restangular.min.js',
          'bower_components/sockjs-client/dist/sockjs.js',
          'bower_components/stomp-websocket/lib/stomp.min.js',
          'bower_components/angular-ui-router/release/angular-ui-router.js',
          'bower_components/appverse-web-html5-core/dist/appverse/*.js',
          'bower_components/appverse-web-html5-core/dist/appverse-*/*.js',

          //'src/appverse-*/**/module.js',
          // The rest
          'src/**/*.js',

          'bower_components/angular-mocks/angular-mocks.js',
          'test/unit/**/*.js'
         ]

    });

};
