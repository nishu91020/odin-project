const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: {
        index: './src/index.js',
        print: './src/print.js'
    },
    devtool: 'inline-source-map',
    devserver: {
        static: './dist'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Output Management',
            title: 'Development'
        })
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },
            {
                test: /\.(png|jpg|svg|jpeg|gif)$/,
                type: 'asset/resource'
            }
        ]
    }
};
