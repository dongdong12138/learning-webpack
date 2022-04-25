module.exports = {
    mode: 'development',
    output: {
        filename: 'scripts/[name].js',
    },
    devServer: {
        static: './dist'    // 告知 devServer，将 dist 目录作为 web 服务的根目录
    }
}