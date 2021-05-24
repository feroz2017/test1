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
        test:  /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        resolve: {
          extensions: [".js", ".jsx"]
        },
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
      {
        test: /\.less$/i,
        use: [
          // compiles Less to CSS
          "style-loader",
          "css-loader",
          "less-loader",
        ],
      }
    ]
  },
  optimization: {
      splitChunks : {chunks: "all"}
  },
  plugins: [
      new HtmlWebpackPlugin({
          title: "Gallary App!",
          template: path.resolve(__dirname,'public','index.html')
      })
  ]
  ,
  devServer: {
    contentBase: path.resolve(__dirname, "build"),
    hot: true
  },
};
