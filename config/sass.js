/*jshint node:true*/
'use strict';

// Compiles Sass to CSS and generates necessary files if requested
module.exports = {
    options: {
        sourceMap: true,
    },
    server: {
        files: [{
            expand: true,
            cwd: '<%=appverse.src%>',
            src: '*.{scss,sass}',
            dest: '<%=appverse.dist%>/',
            ext: '.css'
        }]
    }

};
