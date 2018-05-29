const path = require('path');

const {VueLoaderPlugin} = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  mode: 'development',
  entry: [
    './src/app.js'
  ],
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].[chunkhash].chunk.js',
    path: __dirname + '/dist',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            js: 'babel-loader'
          }
        }
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: [{
          loader: 'babel-loader',
          options: { presets: ['es2015']}
        }]
      }
    ]
  },
  devServer: {
    port: 3000,
    host: 'localhost',
    historyApiFallback: true,
    noInfo: false,
    stats: 'minimal',
    publicPath: '/',
    contentBase: path.join(__dirname, '/'),
    hot: true
    },
  plugins: [
    new VueLoaderPlugin()
  ]
}

// HTML Template
// ------------------------------------
config.plugins.push(new HtmlWebpackPlugin({
    template: './index.html',
    inject: true,
    minify: {
        collapseWhitespace: true,
    },
    filename: './index.html'
}));

module.exports = config;
