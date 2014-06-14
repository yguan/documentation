/*jslint nomen: true*/
/*global $,define,require */

require.config({
    baseUrl: 'js',
    paths: {
        data: './data',
        lib: './lib',
        view: './view',
        template: './template',
        section: './section',
        extension: './extension'
    }
});

require(['view/all-views'], function (views) {
    'use strict';
    views.render('#viewport');
});
