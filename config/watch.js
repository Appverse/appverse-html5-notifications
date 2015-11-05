/*jshint node:true */
'use strict';

module.exports = {
    livereload: {
        options: {
            livereload: true
        },
        tasks: ['jshint', 'jscs'],
        files: [
            '<%= appverse.src %>/{,*/}*.js',
        ]
    }
};
