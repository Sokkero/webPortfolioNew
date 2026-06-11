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
					use: {
						loader: 'babel-loader',
						options: {
							presets: ['@babel/preset-env', '@babel/preset-react'],
							plugins: ['@babel/plugin-proposal-nullish-coalescing-operator']
						}
					}
				},
				{
					test: /\.(png|jpe?g|ico|svg)$/i,
					use: [
						'file-loader',
						{
							loader: 'image-webpack-loader',
						},
					],
				},
				{
					// Already-optimized assets (images, fonts, media): copy as-is, don't re-encode.
					test: /\.(webp|gif|woff2?|eot|ttf|otf|mp4|webm|ogg|mov)$/i,
					use: ['file-loader'],
				},
				{
					test: /\.(zip|accdb|pdf|rar|7z)$/i,
					use: [
						{
							loader: 'file-loader',
							options: {
								name: '[name].[ext]'
							}
						}
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

