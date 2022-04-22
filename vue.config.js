const path = require('path');

function resolveSrc(_path) {
	return path.join(__dirname, _path);
}
const port = 8080;

// vue.config.js
module.exports = {
	devServer: {
		open: true,
		host: '0.0.0.0',
		port: port,
		hot: true,
		https: false,
		hotOnly: false,
		proxy: {
			'/': {
				target: 'http://xxxx:8080',
				secure: false,
				changeOrigin: true,
				pathRewrite: {
					'^/API': '/'
				}
			}
		},
		before: app => {}
	},
	
	lintOnSave: true,
	productionSourceMap: process.env.NODE_ENV !== 'production',
	configureWebpack: {
		resolve: {
			alias: {
				assets: resolveSrc('src/assets')
			}
		}
	},
	css: {
		// Enable CSS source maps.
		//sourceMap: process.env.NODE_ENV !== 'production'
		sourceMap: true
	}
};
