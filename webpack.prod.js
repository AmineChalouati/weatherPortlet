const path = require('path');
const merge = require('webpack-merge');
const webpackCommonConfig = require('./webpack.common.js');

let config = merge(webpackCommonConfig, {
    entry: {
         weather: './src/main/webapp/js/weather.js'
    },
  output: {
    path: path.resolve(__dirname, './target/WeatherPortlet/js/'),
    filename: '[name].bundle.js'
  }
});

module.exports = config;
