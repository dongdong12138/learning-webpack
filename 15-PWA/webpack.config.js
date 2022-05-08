const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const WorkboxPlugin = require('workbox-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        clean: true
    },
    plugins: [
        new HtmlWebpackPlugin(),
        new WorkboxPlugin.GenerateSW({
            clientsClaim: true,   // 帮助快速启用 ServiceWorkers
            skipWaiting: true     // 不允许遗留任何“旧的” ServiceWorkers
        })
    ],
    devServer: {
        static: resolve(__dirname, './dist'),
    }
}