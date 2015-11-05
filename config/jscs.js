module.exports = {
    src: [
        '<%= appverse.src %>/{,*/}*.js'
    ],
    options: {
        config: '.jscsrc',
        'maxErrors': 10000,
        'verbose': false,
        'excludeFiles': [
            'app/bower_components/**/*.js',
            'app/node_modules/**/*.js'
        ]
    }
};
