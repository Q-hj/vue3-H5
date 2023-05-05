// const { defineConfig } = require('@vue/cli-service');

const { VantResolver } = require('unplugin-vue-components/resolvers');
const ComponentsPlugin = require('unplugin-vue-components/webpack');

module.exports = {
	publicPath: './',
	outputDir: 'build',
	productionSourceMap: false,
	devServer: {
		host: '0.0.0.0',
		port: 8080,
		proxy: 'http://localhost:4000',
	},
	configureWebpack: {
		plugins: [
			ComponentsPlugin({
				resolvers: [VantResolver()],
			}),
		],
	},
};
