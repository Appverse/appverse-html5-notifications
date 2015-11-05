/*jshint node:true*/
'use strict';
// Copies remaining files to places other tasks can use

module.exports = {
    dist: {
        expand:true,
        flatten:true,
        src: ['<%= appverse.scripts %>/vendor/notification-fx.js','<%= appverse.scripts %>/vendor/modernizr-custom.js'],
        dest: '<%= appverse.dist %>/'
    }
};
