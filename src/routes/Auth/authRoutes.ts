import express from 'express';
// const { organizationSignup, studentSignup, login } = require('../../controllers/Auth');
import { organizationSignup, studentSignup, login } from '../../controllers/Auth';
const Router = express.Router();

//organizer auth
Router.post("/organization/login", login);
Router.post("/organization/signup", organizationSignup);

//student auth
// Router.post("student/login", studentLogin)
Router.post("/student/signup", studentSignup);

module.exports = Router;
