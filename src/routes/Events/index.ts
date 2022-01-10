import express from 'express';
import {
	createEvent,
	getAllEvents,
	getClubEvents
} from '../../controllers/Events';
import { requrieCookieAuth } from '../../middlewares/requireAuth';

const Router = express.Router();

Router.get('/all/:reqcount', getAllEvents);
Router.get('/:club', getClubEvents);

Router.post('/create', requrieCookieAuth, createEvent);

module.exports = Router;
