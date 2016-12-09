var webpack = require('webpack');
var ignore = new webpack.IgnorePlugin(/\.svg$/);
var pxtorem = require('postcss-pxtorem');

module.exports = {
  devtool: 'source-map',
  entry: {
    main: [
      './src/main.js',
      'webpack-dev-server/client?http://localhost:8080',
      'webpack/hot/only-dev-server',
    ],
  },
  output: {
    publicPath: 'http://localhost:8080/',
    filename: '/js/[name].js',
  },
  module: {
    loaders: [
      { test: /\.js$/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'stage-0', 'react'],
          plugins: ["transform-class-properties","transform-runtime","babel-plugin-transform-decorators-legacy",["antd",{libraryName:"antd-mobile",style:"css"}]]
        },
        exclude: /node_modules/
      },
      { test: /\.scss$/, loaders: ['style', 'css', 'postcss', 'sass'] },
      { test: /\.css$/, loaders: ['style', 'css', 'postcss'] },
      {
        test: /\.(eot|woff|svg|ttf|woff2|gif|appcache)(\?|$)/,
        exclude: /^node_modules$/,
        loader: 'file-loader?name=[name].[ext]'
      }, {
        test: /\.(png|jpg)$/,
        exclude: /^node_modules$/,
        loader: 'url?limit=20000&name=[name].[ext]' //注意后面那个limit的参数，当你图片大小小于这个限制的时候，会自动启用base64编码图片
      },
    ],
  },
  postcss: function () {
    return [pxtorem({
      rootValue: 100,
      propWhiteList: []
    })]
  },
  plugins: [ignore],
  devServer: {
  },
};
