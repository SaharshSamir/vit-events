import express from 'express';
import {
	createEvent,
	getAllEvents,
	eventBookmark,
	getClubEvents
} from '../../controllers/Events';
import {
	requrieCookieAuth,
	requireTokenAuth
} from '../../middlewares/requireAuth';

const Router = express.Router();

Router.get('/all/:reqcount', getAllEvents);

Router.get('/:club', getClubEvents);
Router.post('/add/watchlist', requireTokenAuth, eventBookmark);

Router.post('/create', requrieCookieAuth, createEvent);

module.exports = Router;
