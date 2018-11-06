const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
    mode: 'production',
    devtool: 'inline-source-map',
    entry: './src/JavaScript/index.js',
    output: {
        filename: './JavaScript/bundle.js'
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015', 'react']
            }
        }]
    },
    optimization: {
        minimizer: [new UglifyJsPlugin()]
    }
};