const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const svgToMiniDataURI = require('mini-svg-data-uri')

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: resolve(__dirname, './dist'),
        clean: true,
        assetModuleFilename: 'images/[contenthash][ext][query]'
    },
    module: {
        rules: [
            {
                test: /\.jpg$/,
                type: 'asset/resource',
                generator: {        // 优先级高于 assetModuleFilename
                    filename: 'imgs/[contenthash][ext][query]' 
                }
            },
            {
                test: /\.svg$/,
                type: 'asset/inline',
                generator: { 
                    dataUrl: content => { 
                        content = content.toString(); 
                        return svgToMiniDataURI(content); 
                    } 
                }
            },
            {
                test: /\.txt$/,
                type: 'asset/source'
            },
            {
                test: /\.png$/,
                type: 'asset',
                parser: {
                    dataUrlCondition: {
                        // maxSize: 400 * 1024    // 400kb
                        maxSize: 4 * 1024    // 4kb
                    }
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            inject: 'body'
        })
    ],
    devServer: {
        static: './dist'
    }
}