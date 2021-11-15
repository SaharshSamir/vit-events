export const proxy = require('http-proxy-middleware');

module.exports = function (app) {
	app.use(
		'/',
		proxy({
			target: 'https://localhost:5000',
			changeOrigin: true
		})
	);
};
