const TerserWebpackPlugin = require('terser-webpack-plugin')

module.exports = {
    mode: 'production',
    output: {
        filename: 'scripts/[name].[contenthash].js',
        publicPath: 'http://localhost:8080'
    },
    optimization: {
        minimizer: [new TerserWebpackPlugin()]
    },
}