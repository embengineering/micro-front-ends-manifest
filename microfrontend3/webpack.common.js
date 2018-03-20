const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');

module.exports = {
    entry: {
        'main': path.resolve(__dirname, 'src/react-app.js')
    },
    resolve: {
        extensions: ['.js']
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true
                    }
                }
            }
        ]
    },
    plugins: [
        new ManifestPlugin({
			fileName: 'manifest.json',
			map: (file) => {
				file.name = file.name.replace(/\./g, '');
				return file;
			}
		})
    ]
};
