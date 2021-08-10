const { resolve } = require('path');

const rootPath =  resolve(__dirname, "src");

const presets = [
  [
    "@babel/preset-env", {
    "targets": {
      "browsers": [
        "> 5%, last 3 major versions"
      ],
      node: 'current'
    },
    "modules": "auto"
  }],
  ["@babel/preset-react"]
];

const plugins = [
  [
    "@babel/plugin-transform-runtime",
    {
      regenerator: true,
      root: [rootPath],
      extensions: [
        '.ios.ts',
        '.android.ts',
        '.ts',
        '.ios.tsx',
        '.android.tsx',
        '.tsx',
        '.jsx',
        '.js',
        '.json',
      ]
    }
  ],
  [
    'module-resolver',
    {
      root: [rootPath],
      extensions: [
        '.ios.ts',
        '.android.ts',
        '.ts',
        '.ios.tsx',
        '.android.tsx',
        '.tsx',
        '.jsx',
        '.js',
        '.json',
      ]
    }
  ],
];

const babelConfig = {
  presets,
  plugins
};

module.exports = babelConfig;
