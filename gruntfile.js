/*jshint node:true */

'use strict';

var fs = require('fs'),
    connectLiveReload = require('connect-livereload'),
    LIVERELOAD_PORT = 35729,
    liveReloadSnippet = connectLiveReload({
        port: LIVERELOAD_PORT
    });

module.exports = function(grunt) {
    grunt.loadTasks('./tasks');

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    // Configurable paths
    var configPaths = {
        pkg: grunt.file.readJSON('package.json'),
        appverse:{
            src: 'src',
            bowerComponents: 'bower_components',
            scripts: 'scripts',
            dist: 'dist',
            doc: 'doc',
            test: 'test',
            demo: 'demo',
            docPort: 9999,
            testsConfig: 'test',
            reports: 'reports',
            coverage: 'reports/coverage',
        },
        bowerFile:require('./bower.json'),
    };

    // If app path is defined in bower.json, use it
    try {
        configPaths.appverse.src = bowerFile.appPath || configPaths.appverse.src;
    } catch (e) {}


    // Load grunt configurations automatically at config folder
    var configs = require('load-grunt-configs')(grunt, configPaths);

    // Define the configuration for all the tasks
    grunt.initConfig(configs);
};
