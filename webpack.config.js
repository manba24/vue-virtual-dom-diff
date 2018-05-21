var webpack = require('webpack')
var path = require('path');
module.exports = {
    //文件入口
    entry: './src/app.js',
    //文件出口
    output: {
        path: __dirname + '/dist/',       //打包后的路径
        filename: 'js/[name].bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                //打包除这个文件之外的文件
                exclude: path.resolve(__dirname, "./node_modules"),
                //打包包括的文件
                include: path.resolve(__dirname, "./src"),
                options: {
                    'presets': ['latest']
                }
            }
        ]
    }
}
