const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: {
    index: path.join(__dirname, "src", "main.js"),
    login: path.join(__dirname, "src", "auth", "login.js"),
    signup: path.join(__dirname, "src", "auth", "signUp.js"),
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "./src/[name].[contenthash].bundle.js",
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/ },
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
      { test: /\.ts$/, use: "ts-loader" },
      {
        test: /\.(png|jpg|jpeg)$/,
        loader: "file-loader",
        options: {
          outputPath: "images",
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              // Prefer `dart-sass`
              implementation: require("sass"),
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "index.html"),
      filename: "index.html",
      chunks: ["index"],
    }),
    new HtmlWebpackPlugin({
      filename: "login.html",
      template: path.join(__dirname, "login.html"),
      chunks: ["login"],
    }),
    new HtmlWebpackPlugin({
      filename: "signup.html",
      template: path.join(__dirname, "signup.html"),
      chunks: ["signup"],
    }),

    new MiniCssExtractPlugin({
      filename: "style.css",
    }),

    new CleanWebpackPlugin(),
  ],
  mode: "development",
};
