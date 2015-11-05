/*jshint node:true */
'use strict';

module.exports = {
    options: {
      dest: 'doc',
      scripts: ['../js/angular.min.js', '../js/angular-bootstrap.js', '../js/angular-bootstrap-prettify.js'],
      html5Mode: false,
      startPage: '/api',
      title: 'Preteo Tracking ID Documentation',
      image: '',
      imageLink: '',
      titleLink: '',
      inlinePartials: false,
      bestMatch: true,
      analytics: {
          account: ''
      }
    },
    api: {
      src: ['<%= appverse.src %>/**/*.js'],
      title: 'API Documentation'
    }
};
