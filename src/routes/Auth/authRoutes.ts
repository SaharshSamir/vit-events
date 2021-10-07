import express from 'express';
const {organizationSignup, studentSignup, login} = require('../../controllers/Auth/auth')
const Router = express.Router();

Router.post("/login", login);
Router.post("/organization/signup", organizationSignup);
Router.post("/student/signup", studentSignup);

module.exports = Router;
