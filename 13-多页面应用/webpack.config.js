const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    // entry: './src/app.js',

    // entry: ['./src/app.js', './src/app2.js'],
    // entry: ['./src/app2.js', './src/app.js'],

    // entry: ['./src/app.js', './src/app2.js', 'lodash'],

    // entry: {
    //     main: ['./src/app.js', './src/app2.js'],
    //     lodash: 'lodash'
    // },

    // entry: {
    //     main: {
    //         import: ['./src/app.js', './src/app2.js'],
    //         dependOn: 'lodash'
    //     },
    //     lodash: 'lodash'
    // },

    entry: {
        main: {
            import: ['./src/app.js', './src/app2.js'],
            dependOn: 'lodash'
        },
        main2: {
            import: './src/app3.js',
            dependOn: 'lodash',
            filename: 'chanel/[name].js'
        },
        lodash: {
            import: 'lodash',
            filename: 'common/[name].js'
        }
    },

    output: {
        clean: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: '多页面应用',
            filename: 'index.html',
            template: './index.html',
            inject: 'body',
            chunks: ['main', 'lodash'],
            publicPath: 'http://www.a.com'
        }),
        new HtmlWebpackPlugin({
            title: '呵呵呵',
            filename: 'chanel/index2.html',
            template: './index2.html',
            inject: 'body',
            chunks: ['main2', 'lodash'],
            publicPath: 'http://www.b.com'
        })
    ]
}