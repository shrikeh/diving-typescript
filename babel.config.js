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
      regenerator: true
    }
  ]
];

const babelConfig = {
  presets,
  plugins
};

export default babelConfig;
