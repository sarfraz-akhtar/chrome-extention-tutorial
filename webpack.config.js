const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack')
const path = require('path')
module.exports = {
    entry: './src/clientInfo.js',
    output: {
        path: path.resolve(__dirname,"dist"),
        filename: "main.js"
    },
    module: {
        rules: []
    },
    plugins: [new CopyWebpackPlugin([{
        from: 'webpack_utils/**',
        to: '',
        flatten: true,
        }]),
        new webpack.ProgressPlugin()],
}