import express from 'express';
import { requrieCookieAuth, requireTokenAuth } from '../../middlewares/requireAuth';
import { getOrganizer, getStudent } from '../../controllers/profilles';

const Router = express.Router();

Router.get('/organizer', requrieCookieAuth, getOrganizer);
Router.get('/student', requireTokenAuth, getStudent);

module.exports = Router;