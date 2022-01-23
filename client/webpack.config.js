const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { DefinePlugin } = require("webpack");

module.exports = {
  mode: "development",
  entry: "./src/app.js",
  devtool: "inline-source-map",
  devServer: {
    static: {
      directory: path.join(__dirname, "public/"),
    },
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      inject: "body",
    }),
    new DefinePlugin({
      BASE_URL: JSON.stringify("localhost:3000"),
    }),
  ],
  resolve: {
    modules: ["node_modules", path.resolve(__dirname)],
    extensions: [".js"],
  },
};
