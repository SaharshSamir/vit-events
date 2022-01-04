import express from "express";
import { createEvent } from "../../controllers/Posts";
import { requrieCookieAuth } from "../../middlewares/requireAuth";

const Router = express.Router();

Router.post("/create", requrieCookieAuth, createEvent);

module.exports = Router;