const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/js/script.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },
  plugins: [new MiniCssExtractPlugin()],
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: [
            "style-loader",
            {
            loader: MiniCssExtractPlugin.loader,
            options: 
                {
                    publicPath: path.resolve(__dirname, 'dist'),
                    esModule: false
                },
            },
            "css-loader",
            "sass-loader"
        ],
      },
      {
        test: /\.(eot|ttf|woff|svg)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      {
        test: /\.js$/,
        exclude: '/node_modules/',
        loader: 'eslint-loader',
        options: {
          // eslint options (if necessary)
        },
      }, 
    ],
  },
};