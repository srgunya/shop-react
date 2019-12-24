const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
	  index: "./src/index/index.js",
	  krosovki: "./src/krosovki/krosovki.js",
  },
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({filename: 'index.html', template: "./src/index/index.html", chunks: ['index']}),
	 new HtmlWebpackPlugin({filename: 'krosovki.html', template: "./src/krosovki/krosovki.html", chunks: ['krosovki']}),
  ]
};