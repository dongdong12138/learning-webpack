const { resolve } = require('path')     // resolve 用来拼接绝对路径

module.exports = {
    entry: './src/index.js',
    output: {
        filename: "bundle.js",
        path: resolve(__dirname, 'build')       // __dirname 是 nodejs 的变量，代表当前文件的目录绝对路径
    },
    module: {       // loader 的配置
        rules: [    // 不同文件必须配置不同 loader 处理
            {
                test: /\.css$/,     // 匹配哪些文件
                use: [              // use 数组中 loader 执行顺序：从右到左，从下到上，依次执行
                    'style-loader', // 2. 创建 style 标签，将 js 中的样式资源插入进去，添加到 head 标签中生效
                    'css-loader'    // 1. 将 css 文件变成 commonjs 模块加载到 js 中，里面内容是样式字符串
                ]
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'       // 将 less 文件编译成 css 文件
                ]
            }
        ]
    },
    plugins: [      // 插件的配置

    ],
    mode: 'development'     // 模式，可选值：development | production
}