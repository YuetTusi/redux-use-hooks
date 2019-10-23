const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

let config = {
    mode: 'development',
    entry: './src/index.jsx',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist')
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: [{ loader: 'babel-loader' }],
                exclude: path.resolve(__dirname, './node_modules')
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            name: 'default.html',
            template: path.resolve(__dirname, './template/default.html')
        })
    ]
};

module.exports = config;