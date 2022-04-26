const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: './app.js',
    devServer: {
        static: resolve(__dirname, './dist'),       // 指向当前服务的物理路径
        compress: true,                             // 是否在服务器端进行代码压缩
        port: 3000,                                 // 配置服务的端口号

        headers: {
            'X-Access-Token': 'abc123'
        },

        proxy: {
            '/api': 'http://localhost:9000'     // 当请求 /api，会指向到新的服务器地址
        },

        // https: true,

        http2: true,

        historyApiFallback: true,

        host: '0.0.0.0'
    },
    plugins: [
        new HtmlWebpackPlugin()
    ]
}