import "dotenv/config";
import { __distDir } from "./env";
import { resolve } from "path";
import { WebpackDevServer } from "webpack-dev-server-types";
import { Configuration, ProvidePlugin, LoaderOptionsPlugin } from "webpack";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import SriPlugin from "webpack-subresource-integrity";
import { TsconfigPathsPlugin } from "tsconfig-paths-webpack-plugin";
import { sprintf } from "sprintf-js";

const CspHtmlWebpackPlugin = require("csp-html-webpack-plugin");

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
  template: resolve(__dirname, "templates/index.handlebars"),
  title: "Barney's Diving Site",
  inject: false,
  meta: {
    charset: {
      "charset": "utf-8",
    },
    contentType: {
      "http-equiv": "Content-Type",
      "content": "text/html; charset=UTF-8"
    },
    desc: {
      "name": "description",
      "content": "A simple site showing off my pimping diving kit and adventures"
    },
    viewport: {
      "name": "viewport",
      "content": "minimum-scale=1, initial-scale=1, width=device-width"
    },
    googleSiteVerification: {
      "name": "google-site-verification",
      "content": "bV1vEHUFg8lckfSvBf18zOTssXtYnz1uC6gx4xlbpT0"
    },
    rating: {
      "name": "rating",
      "content": "general"
    }
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
        test: /\.handlebars$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "handlebars-loader",
            options: {
              partialDirs: [
                resolve(__dirname, 'templates', 'partials')
              ]
            }
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
    }),
    new LoaderOptionsPlugin()
  ]
};

export default WebpackConfig;
