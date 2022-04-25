const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: {
        index: './index.js'
    },
    output: {
        filename: '[name].bundle.js',
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin()
    ],
    // devtool: 'eval'
    // devtool: 'source-map'
    // devtool: 'hidden-source-map'
    // devtool: 'inline-source-map'
    // devtool: 'eval-source-map'
    // devtool: 'cheap-source-map'
    devtool: 'cheap-module-source-map'
}