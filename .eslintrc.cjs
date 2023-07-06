require('@rushstack/eslint-patch/modern-module-resolution');

/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:svelte/recommended', 'prettier'],
  plugins: ['@typescript-eslint'],
  /** @type {import('@typescript-eslint/types').ParserOptions & import('eslint').Linter.ParserOptions} */
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2021,
    extraFileExtensions: ['.svelte'],
  },
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  overrides: [
    {
      files: ['*.svelte'],
      parser: 'svelte-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
      },
    },
  ],
};
