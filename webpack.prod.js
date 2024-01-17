const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const htmlWebpackPlugin = require("html-webpack-plugin");
module.exports = merge(common, {
  mode: "production",
  devtool: "source-map",
  plugins: [
    new htmlWebpackPlugin({
      template: "./src/index.html",
      title: "Todo List App",
    }),
  ],
});
