import express from 'express';
import { requrieCookieAuth, requireTokenAuth} from '../../middlewares/requireAuth';
import { getOrganizer, getStudent, test, updateOrganizerInfo} from '../../controllers/profilles';

const Router = express.Router();

Router.get("/organizer", requrieCookieAuth, getOrganizer);
Router.get("/student", requireTokenAuth, getStudent);
Router.get("/test/test", test);
Router.put("/update", requrieCookieAuth, updateOrganizerInfo);

module.exports = Router;