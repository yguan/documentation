/*jslint nomen: true*/
/*global $,define,require,_, marked */

define(function (require, exports, module) {
        'use strict';

        var doT = require('lib/doT'),
            documentationTpl = require('lib/text!template/documentation.tpl'),
            uiTestsData = require('view/ui-tests-data').getData();

        function loadSection(sectionName, $container) {
            require(['lib/text!section/' + sectionName + '.md'], function (content) {
                var sectionHtml = marked(content);

                $container
                    .find('[data-section=' + sectionName + ']')
                    .append(sectionHtml);
            });
        }

        exports.render = function (container) {
            var tempFn = doT.template(documentationTpl),
                documentationHtml = tempFn(uiTestsData),
                $container = $(container);

            $container.append($(documentationHtml));
            $.scrollIt({ topOffset: -25 });
            setTimeout(function () {
                $container.find('#menu a:first').addClass('active');
            }, 100);
            _.each(uiTestsData.sections, function (value, key) {
                loadSection(value.section, $container);
            });
        };
    }
);

//class="{{? index===0 }}active{{?}}"