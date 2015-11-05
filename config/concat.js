/*jshint node:true */
'use strict';

module.exports = {
    basic: {
        src: [
            '<%= appverse.src %>/_module.js','<%= appverse.src %>/notification.directive.js','<%= appverse.src %>/notification.factory.js'
        ],
        dest: '<%= appverse.dist %>/appverse.notifications.js'
    }
};
