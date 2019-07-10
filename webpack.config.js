const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development', // webpack 4 feature,
  entry: {
    app: './app.js',
  },
  output: {
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
            options: { sourceMap: true },
          },
          {
            loader: 'css-loader',
            options: { sourceMap: true, importLoaders: 2 },
          },
        ],
      },
    ],
  },
  devtool: 'cheap-source-map', // check webpack:///.
  devServer: {
    port: 9002,
    overlay: true, // overlay if UI raises some errors while compiling
    hot: true, // enable hot feature step1
    proxy: {
      '/': {
        target: 'https://study.163.com',
        changeOrigin: true,
        pathRewrite: {
          '^/api/study': '/smartSpec/intro.htm',
        },
      },
    },
  },
  plugins: [
    new htmlWebpackPlugin({
      filename: 'index.html',
      template: './index.html',
      minify: {
        collapseWhitespace: true,
      },
      inject: true,
    }),
    new webpack.HotModuleReplacementPlugin(), // enable hot feature step2
  ],
};
