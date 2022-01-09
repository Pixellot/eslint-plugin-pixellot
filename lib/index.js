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
                        'jest/no-test-return-statement': 'off',
                        'jest/prefer-called-with': 'off',
                        'jest/prefer-expect-assertions': 'error',
                        'jest/require-top-level-describe': 'warn',
                        'jest/require-hook': 'warn',
                        'jest/no-hooks': [
                            'error',
                            { "allow": ["afterEach", "afterAll"] }
                        ]
                    }
                }
            ],
            rules: {
                'class-methods-use-this': 'warn',
                'comma-dangle': ['error', 'never'],
                'func-names': ['error', 'as-needed'],
                'indent': ["error", 4, { "SwitchCase": 1 }],
                'max-len': [
                    'error',
                    {     // Lines length rule tweaks
                        "code": 255,
                        "ignoreComments": true,
                        "ignoreTrailingComments": true
                    }
                ],
                'no-await-in-loop': 'warn',
                'no-param-reassign': ['warn', { props: false }],
                'no-plusplus': 'off',
                'no-restricted-syntax': 'off',
                'no-tabs': ['error', { allowIndentationTabs: true }],
                'no-trailing-spaces': ["error", { "skipBlankLines": true }],
                'no-underscore-dangle': 'off',
                'no-unused-vars': ['error', { args: 'none' }],
                'no-use-before-define': ['error', { functions: false }],
                'prefer-promise-reject-errors': 'warn'
            }
        }
    }
};