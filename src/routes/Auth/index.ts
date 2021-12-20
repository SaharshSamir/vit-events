import express from "express";
// const { organizationSignup, studentSignup, login } = require('../../controllers/Auth');
import {
  organizationAuth,
  studentSignup,
  login,
} from "../../controllers/Auth";
const Router = express.Router();

//organizer auth
Router.post("/organization/login", login);
Router.post("/organization",   organizationAuth);
Router.get("/test", (req, res) => {
  res.json({test:"succeeded 😎"})
})

//student auth
Router.post("/student/login", login);
Router.post("/student/signup", studentSignup);

module.exports = Router;
