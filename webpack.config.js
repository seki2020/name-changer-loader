const path = require('path')
const LicenseWebpackPlugin = require('./plugin/license-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    plugins: [
        new LicenseWebpackPlugin('mit')
    ]
}