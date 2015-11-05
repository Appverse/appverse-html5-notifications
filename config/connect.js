'use strict';

module.exports = {
    options: {
        protocol: 'http',
        port: 9000,
        hostname: 'localhost'
    },

    // For demo app in chrome
    livereload: {
        options: {
            port: 9000,
            middleware: function(connect) {
                return [
                    delayApiCalls,
                    liveReloadSnippet,
                    mountFolder(connect, configPaths.src),
                    mountFolder(connect, configPaths.bowerComponents),
                    mountFolder(connect, configPaths.demo),
                    httpMethods
                ];
            }
        }
    },
    doc: {
        options: {
            port: '<%= appverse.docPort %>',
            base: '<%= appverse.doc %>',
            livereload: false,
            keepalive: true
        }
    }
};
