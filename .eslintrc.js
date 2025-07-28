/**
 * ESLint Configuration
 * JavaScript code quality standards, formatting rules, and syntax validation
 */

module.exports = {
  env: {
    node: true,
    es2021: true,
    jest: true,
    commonjs: true
  },

  extends: [
    'eslint:recommended',
    'plugin:node/recommended',
    'plugin:jest/recommended'
  ],

  plugins: [
    'node',
    'jest'
  ],

  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'commonjs'
  },

  rules: {
    // Code quality rules
    'no-console': 'off',
    'no-unused-vars': 'error',
    'no-undef': 'error',
    'no-unreachable': 'error',
    'no-process-exit': 'off',

    // Node.js specific rules
    'node/no-unpublished-require': 'off',
    'node/no-missing-require': 'error',
    'node/no-extraneous-require': 'error',
    'node/exports-style': ['error', 'module.exports'],

    // Jest specific rules
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/prefer-to-have-length': 'warn',
    'jest/valid-expect': 'error',

    // Style rules
    'indent': ['error', 2],
    'quotes': ['error', 'single'],
    'semi': ['error', 'always'],
    'comma-dangle': ['error', 'never'],
    'no-trailing-spaces': 'error',
    'eol-last': 'error',

    // Security rules
    'no-eval': 'error',
    'no-implied-eval': 'error',
    'no-script-url': 'error'
  },

  overrides: [
    {
      files: ['**/*.test.js', '**/*.spec.js'],
      env: {
        jest: true
      },
      rules: {
        'node/no-unpublished-require': 'off'
      }
    }
  ],

  ignorePatterns: [
    'node_modules/',
    'coverage/',
    'logs/',
    '*.log'
  ]
};
