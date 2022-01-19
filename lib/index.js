/**
 * @fileoverview Plugin used by Pixellot company
 * @author Lior Hesed
 */
"use strict";

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------

module.exports = {
    configs: {
        cloudInfra: {
            env: {
                node: true,  // Set nodeJS globals
            },
            globals: {
                "logger": "readonly"    // We use logger globaly
            },
            parserOptions: {
                ecmaVersion: 13,
            },
            extends: [
                'airbnb-base',
                'eslint:recommended',
            ],
            overrides: [
                {
                    files: ['**/__tests__/*.js'],  // Apply Jest lint to tests only
                    "extends": "plugin:jest/all",
                    "env": {
                        "jest/globals": true
                    },
                    rules: {
                        'jest/no-conditional-expect': 'off',
                        'jest/no-done-callback': 'off',
                        'jest/no-focused-tests': 'off',
                        'jest/no-hooks': [
                            'error',
                            { "allow": ["afterEach", "afterAll", "beforeEach", "beforeAll"] }
                        ],
                        'jest/no-test-return-statement': 'off',
                        'jest/prefer-called-with': 'off',
                        'jest/prefer-expect-assertions': 'error',
                        'jest/require-hook': 'off',
                        'jest/require-top-level-describe': 'off'
                    }
                }
            ],
            rules: {
                'class-methods-use-this': 'off',
                'comma-dangle': ['error', 'never'],
                'consistent-return': 'off',
                'func-names': ['error', 'as-needed'],
                'global-require': 'off',
                'import/no-dynamic-require': 'off',
                'indent': ["error", 4, { "SwitchCase": 1 }],
                'max-len': [
                    'error',
                    {     // Lines length rule tweaks
                        "code": 255,
                        "ignoreComments": true,
                        "ignoreTrailingComments": true
                    }
                ],
                'no-await-in-loop': 'off',
                'no-param-reassign': ['warn', { props: false }],
                'no-plusplus': 'off',
                'no-restricted-syntax': 'off',
                'no-return-await': 'warn',
                'no-tabs': ['error', { allowIndentationTabs: true }],
                'no-throw-literal': 'warn,',
                'no-trailing-spaces': ["error", { "skipBlankLines": true }],
                'no-underscore-dangle': 'off',
                'no-unused-vars': ['error', { args: 'none' }],
                'no-use-before-define': ['error', { functions: false }],
                'prefer-promise-reject-errors': 'warn',
                'no-warning-comments': ['error', { "terms": ["todo", "fixme", "bla bla"], "location": "anywhere" }]
            }
        }
    }
};