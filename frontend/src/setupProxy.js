const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
	app.use(
		['/auth'],
		createProxyMiddleware({
			target: 'http://localhost:8000'
		})
	);
	app.use(
		['/profile'],
		createProxyMiddleware({
			target: 'http://localhost:8000'
		})
	);
	app.use(
		['/event'],
		createProxyMiddleware({
			target: 'http://localhost:8000'
		})
	);
};
