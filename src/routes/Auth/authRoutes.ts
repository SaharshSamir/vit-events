import express from 'express';
const {organizationSignup, organizationLogin, test} = require('../../controllers/Auth/auth')
const Router = express.Router();

Router.post("/organization/login", organizationLogin);
Router.post("/organization/signup", organizationSignup);
Router.get("/test", test);

module.exports = Router;
