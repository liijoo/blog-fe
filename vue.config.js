const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
	transpileDependencies: true, // 指定需要通过Babel转译的依赖
	devServer: {
		port: 8081, // 端口号的配置
	},
	// publicPath: "./", // 配置项目及基本路径
	// outputDir:'dist',
	// assetsDir:'static'
});
