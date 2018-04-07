const path = require('path');

module.exports = {

    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: '/build/'
    },
    resolve: {
        extensions: ['.js']
    },
    devServer: {
        host: 'localhost',
        port: 8000,
        inline: true,
        compress: true,
        stats: 'errors-only',
        open: true
    },
    devtool: 'inline-source-map',
    module: {
        rules: [{
            test: /\.js$/,
            use: 'babel-loader',
            exclude: '/node_modules'
        }]
    }
}