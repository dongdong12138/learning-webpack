const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: './src/app.js',
    module: {
        rules: [
            {
                test: /\.js$/,
                // use: ['babel-loader', 'eslint-loader']
                use: ['eslint-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin()
    ]
}