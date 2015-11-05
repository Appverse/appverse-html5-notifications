/*jshint node:true */

'use strict';

module.exports = {
    unit: {
        configFile: '<%= appverse.testsConfig %>/karma.unit.conf.js',
        autoWatch: false,
        singleRun: true
    },
    unitAutoWatch: {
        configFile: '<%= appverse.testsConfig %>/karma.unit.conf.js',
        autoWatch: true
    },
    midway: {
        configFile: '<%= appverse.testsConfig %>/karma.midway.conf.js',
        autoWatch: false,
        singleRun: true
    }
};
