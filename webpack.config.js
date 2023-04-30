const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");



// Webpack configuration
module.exports = {
    stats: { children: true },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "main.bundle-[hash].js",
  },

  resolve: {
    extensions: [".js",".jsx",".ts",".html"],
  },

  mode: process.env.NODE_ENV || "development",
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "public", "index.html"),
      filename: "index.html",
    }),
  ],

  // LOADERS
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ],
  },
};
