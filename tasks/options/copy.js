module.exports = {
    dist: {
        files: [
            {
                expand: true,
                cwd: '<%= folder.src %>/',
                src: [
                    '*.html',
                    '*.png',
                    '*.js',
                    'js/section/**',
                    'img/**'
                ],
                dest: '<%= folder.distTemp %>/'
            },
            {
                src: '<%= folder.src %>/js/all-lib-min.js',
                dest: '<%= folder.distTemp %>/js/all-lib.js'
            }
        ]
    },
    apps: {
        files: [
            {
                expand: true,
                cwd: '<%= folder.distTemp %>/',
                src: ['**'],
                dest: '<%= folder.dist %>/'
            }
        ]
    }
};