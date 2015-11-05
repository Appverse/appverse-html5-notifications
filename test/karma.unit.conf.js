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
        }
    });

};
