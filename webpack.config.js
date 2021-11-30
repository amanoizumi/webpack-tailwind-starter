const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CompressionPlugin = require("compression-webpack-plugin");

const path = require('path');

module.exports = {
  // 最後打包成 web 啟動 live reloading
  // target: 'web',
  entry: './src/index.js',
	// mode: 'development',
	mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.[hash].js',
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            }
          },
          {
            loader: 'postcss-loader',
          }
        ],
      },
			// 加入 Asset Modules
      {
        test: /\.(png|jpg|gif)$/i,
        type: 'asset/resource'
      },
      // babel
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
   // 引入需要當作模版的 html
      template: './src/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'index.[hash].css'
    }),
    new CleanWebpackPlugin(),
    new CompressionPlugin()
  ],
  // devServer: {
  //   static: {
  //     // 要監聽的資料夾路徑
  //     directory: path.join(__dirname, 'src'),
  //   },
  //   compress: true,
  //   port: 9100,
	// 	open: true,
  // },
  devtool: 'source-map'
};