const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin')
const toml = require('toml')
const yaml = require('yamljs')
const json5 = require('json5')

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: resolve(__dirname, './dist'),
        clean: true
    },
    module: {
        rules: [
            // {
            //     test: /\.css$/,
            //     use: ['style-loader', 'css-loader']
            // },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                type: 'asset/resource'
            },
            { 
                test: /\.(csv|tsv)$/, 
                use: 'csv-loader', 
            }, 
            { 
                test: /\.xml$/, 
                use: 'xml-loader', 
            },
            { 
                test: /\.toml$/, 
                type: 'json', 
                parser: { 
                    parse: toml.parse, 
                }, 
            },
            { 
                test: /\.yaml$/, 
                type: 'json', 
                parser: { 
                    parse: yaml.parse, 
                }, 
            },
            { 
                test: /\.json5$/, 
                type: 'json', 
                parser: { 
                    parse: json5.parse, 
                }, 
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            filename: 'app.html',
            inject: 'body'
        }),
        // new MiniCssExtractPlugin()
        new MiniCssExtractPlugin({
            filename: 'styles/[contenthash].css'
        })
    ],
    optimization: {
        minimizer: [new CssMinimizerWebpackPlugin()],
    }
}