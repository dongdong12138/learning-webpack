const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

module.exports = {
    mode: 'development',
    entry: './src/app.js',
    output: {
        filename: 'bundle.js',
        path: resolve(__dirname, './dist'),
        clean: true
    },
    plugins: [
        new HtmlWebpackPlugin(),
        new BundleAnalyzerPlugin()
    ],
    resolve: {
        alias: {
            "@": resolve(__dirname, 'src')    // 将 src 配置为一个模块路径，并起别名为 @
        },
        // extensions: ['.js', '.json', '.wasm'],
        extensions: ['.js', '.json', '.wasm'],
    },
    externalsType: 'script',
    externals: {
        // jquery: 'jQuery',
        jquery: ['https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.js', 'jQuery']
    },
}