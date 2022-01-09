import express from 'express';
import { createEvent, getAllEvents } from '../../controllers/Events';
import { requrieCookieAuth } from '../../middlewares/requireAuth';

const Router = express.Router();

Router.get('/all', getAllEvents);
Router.get('/:club', getAllEvents);

Router.post('/create', requrieCookieAuth, createEvent);

module.exports = Router;
