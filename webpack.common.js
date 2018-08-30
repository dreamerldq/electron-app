const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const entryHtml = [
  'index',
];
const webpackConfig = {
  entry: {
    index: path.join(__dirname, '/src/pages/Index/index.js'),
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name]_bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {},
          },
        ],
      },
      {
        test: /\.(js|jsx)$/,
        use: [
          { loader: 'babel-loader' },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
          },
        ],
      },

    ],
  },
  plugins: [],
  resolve: {
    extensions: ['.js', '.jsx', 'less', 'css'],
  },
  devServer: {
    port: 7000,
    historyApiFallback: true,
  },
};
entryHtml.forEach((name) => {
  const plugin = new HtmlWebpackPlugin({
    filename: `${name}.html`,
    template: path.join(__dirname, 'public/index.html'),
    inject: true,
    chunks: [name],
  });
  webpackConfig.plugins.push(plugin);
});
module.exports = webpackConfig;
