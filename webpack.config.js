const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const distDir = path.resolve(__dirname, 'dist');

const babelOptions = {
  "presets": [
    "@babel/preset-env",
    "@babel/preset-react",
  ]
};

module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: distDir
  },
  module: {
    rules: [{
      test: /\.tsx?$/,
      exclude: /node_modules/,
      use: [
        {
          loader: 'ts-loader'
        },
      ]
    },
    {
      test: /\.css$/i,
      use: ["style-loader", "css-loader"],
    },
  ]},
  resolve: {
    plugins: [new TsconfigPathsPlugin()],
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'main.js',
    path: distDir,
    publicPath: "/"
  }
};
