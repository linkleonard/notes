var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './src/index.jsx',
    output: {
        path: './bin',
        filename: 'app.bundle.js'
    },
    devServer: {
        contentBase: './bin',
    },
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: path.join(__dirname, 'node_modules'),
            },
            {
                test: /.css$/,
                include: '/',
                loaders: ['style', 'css'],
            },
            {
                test: /.less$/,
                include: '/',
                loaders: ['style', 'css', 'less'],
            },
            {
                test: /\.(woff2?|eot|ttf|svg)$/,
                include: '/',
                loaders: ['file-loader'],
            }
        ]
    },
    devtool: 'source-map',
}
