const path = require('path')

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            { 
                test: /\.js$/i, 
                use:[
                    path.resolve(__dirname,'./loader/async-replace.js'),
                    path.resolve(__dirname,'./loader/replace.js')
                ]
            }
        ]
    }
}