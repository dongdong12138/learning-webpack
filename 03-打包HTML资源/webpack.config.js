const HtmlWebpackPlugin = require('html-webpack-plugin')
const { resolve } = require('path')

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: resolve(__dirname, 'build')
    },
    module: {
        rules: []
    },
    plugins: [
        // 默认会创建一个空的 HTML，自动引入打包输出的所有资源（JS/CSS等）
        // new HtmlWebpackPlugin()

        new HtmlWebpackPlugin({
            // 将对应的文件作为模板编译，并自动引入打包输出的所有资源（JS/CSS等）
            // 因为会自动引入，所以我们不用再手动引入，否则引入两遍可能会出问题
            template: './src/index.html'
        })
    ]
}