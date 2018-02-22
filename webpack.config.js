const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");

const htmlWebpackPlugin = new HtmlWebpackPlugin({
    filename: './index.html',
    template: '!!html-loader!./index.html',
    hash: false,
    inject: 'body'
});

var config = {
  devtool: "inline-source-map",
  entry: "./index.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[chunkhash].js",
    devtoolModuleFilenameTemplate: 'webpack:///[absolute-resource-path]'
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        exclude: ["node_modules"],
        use: ["ts-loader", "source-map-loader"]
      },
      {
          test: /\.html$/,
          use: {
            loader: "html-loader"
          }
      },
      {
          test: /\.glsl$/,
          use: {
            loader: "shader-loader"
          }
      }
    ]
  },
  resolve: {
    alias: {
      'tutorials': path.resolve(__dirname, 'tutorials'),
    },
    extensions: [".ts"]
  },
  plugins: [
      htmlWebpackPlugin
  ]
};

module.exports = config;
