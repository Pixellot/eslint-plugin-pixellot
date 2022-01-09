"use strict";

module.exports = {
    root: true,
    extends: [
        "eslint:recommended",
        "plugin:eslint-plugin/recommended",
        "plugin:node/recommended",
    ],
    env: {
        node: true,
    },
    rules: {
        'indent': ["error", 4, { "SwitchCase": 1 }]
    }
};