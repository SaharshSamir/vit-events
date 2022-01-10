import { Request, Response } from 'express';
import { model, ObjectId } from 'mongoose';
import { Event } from '../../types/Event';
import { Document } from 'mongoose';

const Organizer = model('organizers');
const Event = model('events');

type EventType =
	| Event
	| (Document<any, any, unknown> & {
			_id: ObjectId;
	  });

export const createEvent = async (req: any, res: any) => {
    const {title, description, date} = req.body;
    const organizer_id = req.userId;
    try {
        const currentUser = await Organizer.findById(organizer_id)
        if(currentUser){
            let newEvent:EventType = {
                _organizer: currentUser?._id,
                title,
                description,
                date
            }
            newEvent = await Event.create(newEvent);
            return res.json({data: {ok: true}})
        }else {
            return res.status(200).json({ok: false, error: "You can not upload a new event"})
        }
    } catch (error) {
        console.error(error);
        return res.status(200).json({ok: false, error})
    }
}

export const getClubEvents = async (req: any, res: any) => {
	const { club } = req.query.params;
	try {
		const clubEvents = await Event.find({ name: club });
		return res.status(200).json({ ok: true, clubEvents: clubEvents });
	} catch (error) {
		console.error(error);
		return res.status(200).json({ ok: false, error });
	}
};

export const getAllEvents = async (req: any, res: any) => {
	const { reqCount } = req.body || 1;

	try {
		const allEvents = await Event.find({})
			.limit(5)
			.skip(reqCount * 5);
		return res.status(200).json({ ok: true, allEvents: allEvents });
	} catch (error) {
		console.error(error);
		return res.status(200).json({ ok: false, error });
	}
};
