const HtmlWebpackPlugin = require('html-webpack-plugin');
const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
	template: __dirname + '/public/index.html',
	filename: 'index.html',
	inject: 'body'
});

module.exports = function(mode) {
	const isInDevelopmentMode = mode === 'development';

	return{
		module: {
			rules: [
				{
					test: /\.(css|scss)$/i,
					exclude: /node_modules/,
					use: [
						isInDevelopmentMode ? 'style-loader' : 'style-loader',
						{
							loader: 'css-loader',
							options: {
								modules: {
									localIdentName: '[local]__[hash:base64:5]'
								}
							}
						},
					],
				},
				{
					test: /\.(js|jsx)$/,
					exclude: /node_modules/,
					use: ['babel-loader'],
				},
				{
					test: /\.(png|jpe?g|gif|ico|svg|ttf)$/i,
					use: [
						'file-loader',
						{
							loader: 'image-webpack-loader',
						},
					],
				},
			],
		},
		plugins: [HTMLWebpackPluginConfig],
		devServer: {
			inline:true,
			contentBase: './public',
			port: 8080
		},
	};
};

