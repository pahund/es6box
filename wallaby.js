/**
 * wallaby.js
 *
 * @author <a href="mailto:pahund@team.mobile.de">Patrick Hund</a>
 * @since 18 Apr 2015
 */
const babel = require("babel"),
    wallabyWebpack = require("wallaby-webpack");

module.exports = function () {
    return {
        files: [
            {
                pattern: "boxes/**/js/*.js",
                load: false
            }
        ],

        tests: [
            {
                pattern: "boxes/**/test/*-spec.js",
                load: false
            }
        ],

        preprocessors: {
            "**/*.js": file => babel.transform(file.content, {
                sourceMap: true
            })
        },

        postprocessor: wallabyWebpack(),

        bootstrap: () => {
            window.__moduleBundler.loadTests();
        }
    };
};
