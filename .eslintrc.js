"use strict";

module.exports = {
  root: true,

  //required!; use the previously installed parser; it allows ESLint to understand
  //TypeScript syntax; it converts TypeScript into an ESTree-compatible form so it
  //can be used in ESLint
  parser: '@typescript-eslint/parser',

  parserOptions: {
    project: ['./tsconfig.json'],  //required for "type-aware linting"
  },

  plugins: [
    //load the previously installed plugin; allows me to use the rules within my codebase
    '@typescript-eslint',
  ],

  extends: [
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    "import/extensions": [
      "error",
      "never"
    ],
  }
};
