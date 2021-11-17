import { getAuthToken } from "../utils/cookieStuff";
import jwt from 'jsonwebtoken'


export const requrieCookieAuth = (req, res, next) => {
    const token = getAuthToken(req.cookies);
    const jwtSecret = process.env.JWT_SECRET_KEY || "";
    if(token){
        const decoded = jwt.verify(token, jwtSecret);
        req.userId = decoded;
        req.userId = req.userId.userId;
        console.log(`DECODED TOKEN: \n\n ${JSON.stringify(decoded)}`);
    }
    next();
}

export const requireTokenAuth = (req, res, next) => {
    // const token = req.body.headers.Authorization
    // console.log(`req.body:\n ${JSON.stringify(req.body)}`);
    // console.log(`req.headers:\n ${JSON.stringify(req.headers)}`);
    console.log(`auth header: `);
    console.log(req.headers.authorization);
    const token = req.headers.authorization.split(' ')[1];
    const jwtSecret = process.env.JWT_SECRET_KEY || "";
    if(!token){
        return res.status(300).json({error: "You are not authorized"})
    }
    const decoded = jwt.verify(token, jwtSecret);
    req.studentId = decoded;
    req.studentId = req.studentId.id;
    next();
}