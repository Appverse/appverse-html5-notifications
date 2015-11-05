/*jshint node:true */
'use strict';

module.exports = {
    dist: {
        files: [{
            dot: true,
            src: [
                '.tmp',
                '<%= appverse.dist %>/**',
                '!<%= appverse.dist %>/.git*'
            ]
        }]
    },
    coverage: '<%= appverse.coverage %>/**',
    server: '.tmp',
    doc: 'doc/<%= appverse.bowerfile %>.version'
};
