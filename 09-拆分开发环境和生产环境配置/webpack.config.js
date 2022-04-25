const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')

module.exports = (env) => {
    return {
        mode: env.production ? 'production' : 'development',
        entry: {
            index: './src/index.js'
        },
        output: {
            filename: 'scripts/[name].[contenthash].js',
            path: resolve(__dirname, './dist'),
            clean: true,
            publicPath: 'http://localhost:8080'
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './index.html',
                filename: 'app.html',
                inject: 'body'
            })
        ],
        optimization: {
            minimizer: [new TerserWebpackPlugin()]
        },
        devServer: {
            static: './dist'    // 告知 devServer，将 dist 目录作为 web 服务的根目录
        }
    }
}