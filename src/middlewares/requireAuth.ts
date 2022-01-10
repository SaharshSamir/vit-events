import { getAuthToken } from '../utils/cookieStuff';
import jwt from 'jsonwebtoken';

export const requrieCookieAuth = (req, res, next) => {
	const token = getAuthToken(req.cookies);
	const jwtSecret = process.env.JWT_SECRET_KEY || '';
	try {
		if (token) {
			const decoded = jwt.verify(token, jwtSecret);
			req.userId = decoded;
			req.userId = req.userId.userId;
		}
		next();
	} catch (error) {
		console.log('Error in requireCookieAuth: ');
		console.log(error);
		return res.status(200).json({
			ok: false,
			error
		});
	}
};

export const requireTokenAuth = (req, res, next) => {
	// const token = req.body.headers.Authorization
	// console.log(`req.body:\n ${JSON.stringify(req.body)}`);
	// console.log(`req.headers:\n ${JSON.stringify(req.headers)}`);
	console.log(`auth header: `);
	console.log(req.headers.authorization);
	console.log(req.headers);
	const token = req.headers?.authorization?.split(' ')[1];
	const jwtSecret = process.env.JWT_SECRET_KEY || '';
	if (!token) {
		return res.status(300).json({ error: 'You are not authorized' });
	}
	const decoded = jwt.verify(token, jwtSecret);
	req.studentId = decoded;
	req.studentId = req.studentId.id;
	next();
};
