import { resolve } from 'path';

const rootPath =  resolve(__dirname, "src");
const appPath = resolve(rootPath, 'app');

const presets = [
  [
    "@babel/preset-env", {
    "targets": {
      "browsers": [
        "> 5%, last 3 major versions"
      ],
      "node": "current"
    }
  }],
  ["@babel/preset-react"],
  ["@babel/preset-typescript"]
];

const plugins = [
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
      ],
      alias: {
        '~app': appPath
      },
    },
  ],
];

const babelConfig = {
  presets,
  plugins
};

export default babelConfig;
