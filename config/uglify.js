/*jshint node:true */
'use strict';

module.exports = {
  options: {
    banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - */',
    sourceMap: true,
  },
  dist: {
    files: [{
      expand: true, // Enable dynamic expansion.
      cwd: '<%= appverse.dist %>', // Src matches are relative to this path.
      src: ['*.js'], // Actual pattern(s) to match.
      dest: '<%= appverse.dist %>', // Destination path prefix.
      ext: '.min.js', // Dest filepaths will have this extension.
      extDot: 'last' // Extensions in filenames begin after the last dot
    }]
  }
};
