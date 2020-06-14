const path = require("path");
const HtmlPlugin = require("html-webpack-plugin");
module.exports = {
  entry: path.join(__dirname, "./src/index.js"),
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js",
  },
  // module: {
  //   rules: [
  //     {
  //       test: /.js$/,
  //       use: "babel-loader",
  //     },
  //   ],
  // },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: false,
    port: 8080,
  },
  plugins: [
    new HtmlPlugin({
      template: path.join(__dirname, "./index.html"),
    }),
  ],
};
