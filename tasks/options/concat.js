module.exports = {
    cssdev: {
        src: [
            '<%= folder.src %>/css/app.css'
        ],
        dest: '<%= folder.src %>/css/app-min.css'
    },
    cssdist: {
        src: [
            '<%= folder.buildTemp %>/app.css'
        ],
        dest: '<%= folder.distTemp %>/css/app-min.css'
    },
    lib: {
        src: [
            '<%= folder.src %>/js/lib/lodash.underscore.js',
            '<%= folder.src %>/js/extension/lodash.underscore.js',
            '<%= folder.src %>/js/lib/jquery.js',
            '<%= folder.src %>/js/lib/scrollIt.js',
            '<%= folder.src %>/js/lib/marked.js',
            '<%= folder.src %>/js/lib/require.js'
        ],
        dest: '<%= folder.src %>/js/all-lib.js'
    }
};
