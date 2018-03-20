const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = merge(common, {
    output: {
        path: path.resolve(__dirname, '../dist/microfrontend3'),
        filename: '[name].[chunkhash].js'
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
				test: /\.(css)$/,
				loader: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: ['css-loader']
				})
			}
        ]
    },
    plugins: [
        new ExtractTextPlugin('[name].[chunkhash].css')
    ]
});