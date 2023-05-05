const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
	transpileDependencies: true,
	publicPath: './',
	outputDir: 'build',
	devServer: {
		host: '0.0.0.0',
		port: 8080,
		proxy: 'http://localhost:4000',
	},
});
