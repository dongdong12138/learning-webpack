const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js'
    },
    output: {
        filename: 'scripts/[name].[contenthash].js',
        path: resolve(__dirname, './dist'),
        clean: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            filename: 'app.html',
            inject: 'body'
        })
    ],
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: { 
                    test: /[\\/]node_modules[\\/]/, 
                    name: 'vendors', 
                    chunks: 'all'
                }
            }
        }
    }
}