const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const mode = (process.env.NODE_ENV !== 'production' ? 'development' : 'production')

const deploymentLevelSpecificConfigs = {
  module: {
    rules: {
      jsx: {
        use: {
          production: {
            loader: "babel-loader",
          },
          development: {
            loader: "babel-loader",
            options: {
              plugins: [
                require.resolve('react-refresh/babel'),
              ]
            },
          }
        }
      }
    }
  },
  plugins: {
    production: [
      new HtmlWebpackPlugin({
        filename: "index.html",
        template: path.join(__dirname, "src", "index.template.html")
      }),
      new MiniCssExtractPlugin({
        filename: "[name].css",
        chunkFilename: "[id].css"
      }),
    ],
    development: [
      new HtmlWebpackPlugin({
        filename: "index.html",
        template: path.join(__dirname, "src", "index.template.html")
      }),
      new MiniCssExtractPlugin({
        filename: "[name].css",
        chunkFilename: "[id].css"
      }),
      new ReactRefreshWebpackPlugin(),
    ]
  }
}

module.exports = {
  mode,
  entry: {
    index: path.join(__dirname, 'src', 'index.js'),
  },
  module: {
    rules: [
      {
        test: /.(js|jsx)$/,
        resolve: {
          extensions: [".js", ".jsx"]
        },
        exclude: /node_modules/,
        use: deploymentLevelSpecificConfigs.module.rules.jsx.use[mode],
      },
      {
        test: /.(css|scss)$/,
        use: [
          MiniCssExtractPlugin.loader, "css-loader", "sass-loader"
        ]
      }
    ]
  },
  output: {
    filename: '[name].bundle.js',
    path: path.join(__dirname, 'dist', 'public'),
    publicPath: '/',
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: path.join(__dirname, "src", "index.template.html")
    }),
  ],
  plugins: deploymentLevelSpecificConfigs.plugins[mode],
  devServer: {
    hot: true,
  },
}
