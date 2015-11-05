/*jshint node:true */
'use strict';

module.exports = {
    main: {
        options: {
            jshint: '.jshintrc'
        },
        files: {
            '<%= appverse.reports %>/analysis/': [
                '<%= appverse.src %>/**/*.js',
                '<%= appverse.test %>/unit/**/*.js',
                '<%= appverse.test %>/midway/**/*.js',
                //'<%= appverse.test %>/e2e/**/*.js',
            ]
        }
    }
};
