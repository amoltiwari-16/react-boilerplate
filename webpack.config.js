const {resolve} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const DashboardPlugin = require('webpack-dashboard');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const srcDir = resolve(__dirname, 'src');

module.exports = {
	entry: `${srcDir}\\index.js`,
	output: {
		filename: 'bundle.js'
	},
	module: {
		rules: [
		{
			test: /\.js$/,
			loader: 'babel-loader',
			exclude: /node_modules/,
			query: {
                    presets: ["react", "es2015", "stage-2"]
                }
		},
		{
			test: /\.css$/,
			loader: ExtractTextPlugin.extract({
				falbackLoader: 'style-loader',
				loader: 'css-loader?modules,localIdentName="[name]-[local]-[hash:base64:6]"'
			})
		}
		/*{
			enforce: 'pre',
			test: /\.js$/,
			loader: 'standard-loader',
			exclude: /node_modules/
		}*/]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: `${srcDir}\\index.html`
		}),
		new ExtractTextPlugin({
			filename: 'bundle.css'
		})
		//new DashboardPlugin()
	]
};