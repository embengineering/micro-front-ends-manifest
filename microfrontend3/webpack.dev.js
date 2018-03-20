const merge = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
    output: {
        filename: '[name].js',
    },
    devServer: {
        port: 4300,
    },
    devtool: 'inline-source-map',
    module: {
		rules: [{
			test: /\.(css)$/,
			loader: ['style-loader', 'css-loader?sourceMap']
		}]
	},
    plugins: [
        new HtmlWebpackPlugin({
            chunks: ['main'],
            filename: 'index.html',
            template: path.resolve(__dirname, 'src/index.html')
        })
    ]
});
