/*jshint node:true */
'use strict';

module.exports = {
    options: {
        goal: 'install',
        groupId: 'org.appverse.web.framework.modules.frontend.html5',
        repositoryId: 'my-nexus',
        releaseRepository: 'url'

    },
    'install-src': {
        options: {
            classifier: 'sources'
        },
        files: [{
            expand: true,
            cwd: '<%= appverse.src %>/',
            src: ['**', '!bower_components/**'],
            dest: '.'
        }]
    },
    'install-min': {
        options: {
            classifier: 'min'
        },
        files: [{
            expand: true,
            cwd: '<%= appverse.dist %>/',
            src: ['**'],
            dest: '.'
        }]
    },
    'deploy-src': {
        options: {
            goal: 'deploy',
            url: '<%= releaseRepository %>',
            classifier: 'sources'
        },
        files: [{
            expand: true,
            cwd: '<%= appverse.src %>/',
            src: ['**', '!bower_components/**'],
            dest: '.'
        }]
    },
    'deploy-min': {
        options: {
            goal: 'deploy',
            url: '<%= releaseRepository %>',
            classifier: 'min'
        },
        files: [{
            expand: true,
            cwd: '<%= appverse.dist %>/',
            src: ['**'],
            dest: '.'
        }]
    }
};
