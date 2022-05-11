const HtmlWebpackPlugin = require('html-webpack-plugin')
const { ModuleFederationPlugin } = require('webpack').container

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        clean: true
    },
    plugins: [
        new HtmlWebpackPlugin(),

        new ModuleFederationPlugin({
            name: 'nav',    // 表示这个模块联邦的名字，将来别的应用访问这个组件时需要通过这个名字来访问
            filename: 'remoteEntry.js',     // 向外暴露的资源的名字，供别的应用使用
            remotes: {},    // 引用其他应用暴露的组件
            exposes: {      // 暴露一些组件给别的应用使用
                './Header': './src/Header.js'
            },
            shared: {}      // 共享的模块
        })
    ]
}