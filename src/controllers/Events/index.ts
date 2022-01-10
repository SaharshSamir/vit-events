import { model, ObjectId } from 'mongoose';
import { Event } from '../../types/Event';
import { Document } from 'mongoose';

const Organizer = model('organizers');
const Event = model('events');
const Student = model('students');

type EventType =
	| Event
	| (Document<any, any, unknown> & {
			_id: ObjectId;
	  });

export const createEvent = async (req: any, res: any) => {
	const { title, description, date, registration } = req.body;
	const organizer_id = req.userId;
	try {
		const currentUser = await Organizer.findById(organizer_id);
		if (currentUser) {
			let newEvent: EventType = {
				_organizer: currentUser?._id,
				title,
				description,
				date,
				registration
			};
			newEvent = await Event.create(newEvent);
			return res.json({ data: { ok: true } });
		} else {
			return res
				.status(200)
				.json({ ok: false, error: 'You can not upload a new event' });
		}
	} catch (error) {
		console.error(error);
		return res.status(200).json({ ok: false, error });
	}
};

export const getClubEvents = async (req: any, res: any) => {
	const club = req.params.club;

	try {
		const clubEvents = await Event.find({ name: club });
		return res.status(200).json({ ok: true, clubEvents: clubEvents });
	} catch (error) {
		console.error(error);
		return res.status(200).json({ ok: false, error });
	}
};

export const getAllEvents = async (req: any, res: any) => {
	const reqcount = parseInt(req.params.reqcount);

	try {
		const allEvents = await Event.find({})
			.limit(5)
			.skip(reqcount * 5);
		console.log(allEvents);
		return res.status(200).json({ ok: true, allEvents: allEvents });
	} catch (error) {
		console.error(error);
		return res.status(200).json({ ok: false, error });
	}
};

export const eventBookmark = async (req:any, res:any) => {
	console.log(req.studentId);
	const {event_id} = req.body;
	try {
		const newStudent:any = await Student.findByIdAndUpdate(req.studentId, {watchList: event_id}, {new: true});
		if(newStudent.watchList === event_id) return res.status(200).json({ok: true, newStudent});
		else throw new Error("Could not set event to watchlist");
	} catch (error) {
		res.status(200).json({ok: false, error})
	}
}
