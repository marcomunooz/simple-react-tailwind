const HtmlWebPackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              ["@babel/preset-react", {
                "runtime": "automatic"
              }]
            ]
          }
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebPackPlugin({
      template: "./src/template.html",
      filename: 'index.html'
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  }
}
