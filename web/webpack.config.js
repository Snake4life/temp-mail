var path = require('path');
var webpack = require('webpack');

module.exports = {
	entry: {
		app: './app.jsx'
	},
	output: {
		path: path.join(__dirname, '.build'),
		publicPath: '/',
		filename: '[name].min.js',
		chunkFilename: '[id].min.js',
		sourceMapFilename: '[file].map'
	},
	devServer: {
		headers: {
			'Access-Control-Allow-Origin': '*'
		}
	},
	plugins: [
		new webpack.ProvidePlugin({
			'$': 'jquery',
			'jQuery': 'jquery',
			'window.jQuery': 'jquery',
			'Tether': 'tether'
		})
	],
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: ['style-loader', 'css-loader', 'sass-loader']
			},
			{
				test: /\.jsx$/,
				use: ['babel-loader']
			}
		]
	}
};