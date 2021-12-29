import { serialize } from "cookie";

const MAX_AGE = 60 * 60 * 8;
const TOKEN_NAME = "api_token";

export const createCookie = (name, data, options = {}) => {
    return serialize(name, data, {
        maxAge: MAX_AGE,
        expires: new Date(Date.now() + MAX_AGE * 1000),
        secure: process.env.NODE_ENV === "production",
        path: "/",
        httpOnly: true,
        sameSite: "lax",
        ...options
    })
}

export const setTokenCookie = (res, token) => {
    // res.setHeader('Access-Control-Expose-Headers', ['Set-Cookie']);
    // res.setHeader('Set-Cookie', [
    //     createCookie(TOKEN_NAME, token),
    //     createCookie('authed', true, {httpOnly: false})
    // ])
    res.cookie('api_token', token);
}

export const getAuthToken = (cookies) => {
    console.log(cookies);
    return cookies[TOKEN_NAME]
}