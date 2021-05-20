const HtmlWebpackPlugin = require('html-webpack-plugin');


const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ]
  },
  optimization: {
      splitChunks : {chunks: "all"}
  },
  plugins: [
      new HtmlWebpackPlugin({
          template: path.resolve(__dirname,'public','index.html')
      })
  ]
  ,
  devServer: {
    contentBase: path.resolve(__dirname, "build"),
    hot: true
  },
};
