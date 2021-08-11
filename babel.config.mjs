const preset = [
  "@babel/preset-env",
  {
    targets: {
      browsers: [
        '> 5%, last 3 major versions'
      ],
      node: 'current'
    }
  },
  "@babel/preset-react"
];

const plugins =  [
  [
    "@babel/plugin-transform-runtime",
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

export default babelConfig;
