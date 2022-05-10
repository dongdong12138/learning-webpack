const path = require("path");

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    experiments: {
      outputModule: true,
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'mylib.js',
        clean: true,

        // library: 'mylib',

        library: {
            // name: 'mylib',
            type: 'umd',
            // type: 'module',
            // type: 'commonjs'
        },

        globalObject: 'globalThis'
    }
}