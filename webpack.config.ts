import "dotenv/config";
import { __distDir } from "./env";
import { resolve } from "path";
import { WebpackDevServer } from "webpack-dev-server-types";
import { Configuration } from "webpack";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
const CspHtmlWebpackPlugin = require("csp-html-webpack-plugin");
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import SriPlugin from "webpack-subresource-integrity";
import { TsconfigPathsPlugin } from "tsconfig-paths-webpack-plugin";

export const DevServerConfig: WebpackDevServer.Configuration = {
  compress: true,
  static: [{
    directory: __distDir
  }],
  host: "localhost",
  port: 8443,
  https: {
    cert: "tools/tls/certs/nginx-selfsigned.crt",
    key: "tools/tls/private/nginx-selfsigned.key",
  }
};

const miniExtractCssOptions = {
  filename: "css/[name].css",
};

const htmlWebpackOptions = {
  template: resolve(__dirname, "templates/index.ejs"),
  title: "Barney's Diving Site",
  inject: false,
  meta: {
    charset: "utf-8",
    viewport: "minimum-scale=1, initial-scale=1, width=device-width"
  }
}

export const WebpackConfig: Configuration = {
  mode: "development",
  entry: "./src/index.ts",
  devtool: "source-map",
  devServer: DevServerConfig,
  module: {
    rules: [
      {
        test: /\.hbs$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "handlebars-loader"
          },
        ]
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader"
          },
        ]
      },
      {
        test: /\.css$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          "css-loader"
        ],
      },
    ]
  },
  resolve: {
    plugins: [new TsconfigPathsPlugin()],
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "js/main.js",
    path: __distDir,
    publicPath: "/",
    crossOriginLoading: "anonymous"
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin(htmlWebpackOptions),
    new MiniCssExtractPlugin(miniExtractCssOptions),
    new SriPlugin({
      enabled: true,
      hashFuncNames: [ "sha384" ]
    }),
    new CspHtmlWebpackPlugin({
      "script-src": "",
      "style-src": ""
    })
  ]
};

export default WebpackConfig;
