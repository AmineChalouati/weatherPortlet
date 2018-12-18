const path = require('path');
const merge = require('webpack-merge');
const webpackCommonConfig = require('./webpack.common.js');
const CopyWebpackPlugin = require('copy-webpack-plugin');

// change the server path to your server location path
const exoServerPath = "/home/exo/Documents/Projects_Atis/atis-2.2/atis-exo5.1/";


let config = merge(webpackCommonConfig, {
    entry: {
        weather: './src/main/webapp/js/weather.js'
    },
    output: {
        path: path.resolve(__dirname, exoServerPath + 'webapps/'),
        filename: '[name].bundle.js'
    },
    devtool: 'inline-source-map'
});

config.plugins.push(new CopyWebpackPlugin([{from: 'src/main/webapp/lang/*.json', to: './lang', flatten: true}]));

module.exports = config;