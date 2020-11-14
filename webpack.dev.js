const path = require('path')
const { merge } = require('webpack-merge')
const common = require('./webpack.common')
const HtmlWebPackPlugin = require('html-webpack-plugin')

module.exports = merge(common, {
  output: {
    filename: 'main.[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader', {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                ident: 'postcss',
                plugins: [
                  require('tailwindcss'),
                  require('autoprefixer'),
                ],
              },
            }
          },
        ],
      },
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/template.html",
      filename: 'index.html'
    }),
  ],
})
