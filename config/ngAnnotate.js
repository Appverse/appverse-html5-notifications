/*jshint node:true */

'use strict';

module.exports = {
  dist: {
    files: [{
      expand: true,
      cwd: '<%= appverse.dist %>',
      src: ['**/*.js', '!oldieshim.js'],
      dest: '<%= appverse.dist %>',
      extDot: 'last'
    }]
  }
};
