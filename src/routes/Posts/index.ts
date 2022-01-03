import express from "express";
import { createPost } from "../../controllers/Posts";
import { requrieCookieAuth } from "../../middlewares/requireAuth";

const Router = express.Router();

Router.post("/create", requrieCookieAuth, createPost);