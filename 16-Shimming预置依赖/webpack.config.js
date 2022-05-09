const HtmlWebpackPlugin = require('html-webpack-plugin')
// const webpack = require('webpack')

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        clean: true
    },
    plugins: [
        new HtmlWebpackPlugin(),
        // new webpack.ProvidePlugin({
        //     // _: 'lodash'
        //     join: ['lodash', 'join']
        // })
    ],

    // module: {
    //     rules: [
    //         {
    //             test: require.resolve('./src/index.js'),
    //             use: 'imports-loader?wrapper=window'
    //         },
    //         {
    //             test: require.resolve('./src/global.js'),
    //             use: 'exports-loader?type=commonjs&exports=file,multiple|helpers.parse|parse'
    //         }
    //     ]
    // }

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            [
                                '@babel/preset-env',
                                {
                                    targets: [
                                        'last 1 version',
                                        '> 1%'
                                    ],
                                    useBuiltIns: 'usage',
                                    corejs: 3
                                }
                            ]
                        ]
                    }
                }
            }
        ]
    }
}