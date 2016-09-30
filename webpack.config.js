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
            }
        ]
    },
    devtool: 'source-map',
}
