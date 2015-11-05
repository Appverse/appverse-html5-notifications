/*jshint node:true */
'use strict';

module.exports = {
  options: {
    jshintrc: '.jshintrc',
    reporter: require('jshint-stylish'),
    //Show failures but do not stop the task
    force: true
  },
  all: [
    '<%= appverse.src %>/{,*/}*.js'
  ]
};
