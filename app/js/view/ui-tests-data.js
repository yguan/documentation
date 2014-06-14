/*jslint nomen: true*/
/*global $,define,require,_, marked */

define(['exports'], function (exports) {
        'use strict';

        exports.getData = function () {
            return {
                sections: [
                    { title: 'section 1', section: 'test-server' },
                    { title: 'section 2', section: 'browser-tests' }
                ]
            };
        };
    }
);