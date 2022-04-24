const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js',
        another: './src/another-module.js'
    },
    // entry: {
    //     index: { 
    //         import: './src/index.js', 
    //         dependOn: 'shared'
    //     },
    //     another: { 
    //         import: './src/another-module.js', 
    //         dependOn: 'shared'
    //     },
    //     shared: 'lodash'
    // },
    output: {
        filename: '[name].bundle.js',
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
            chunks: 'all', 
        }, 
    }
}