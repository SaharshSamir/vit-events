"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const { organizationSignup, organizationLogin, test } = require('../../controllers/Auth/auth');
const Router = express_1.default.Router();
Router.post("/organization/login", organizationLogin);
Router.post("/organization/signup", organizationSignup);
Router.get("/test", test);
module.exports = Router;
