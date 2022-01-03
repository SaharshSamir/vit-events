import { Request, Response } from 'express';
import {model, ObjectId} from 'mongoose';
import { Event } from "../../types/Event";
import { Document } from 'mongoose';

const Organizer = model("organizer");
const Event = model("events");

type EventType = Event | Document<any, any, unknown> & {
    _id: ObjectId
}

export const createPost = async (req: any, res: any) => {
    const {title, description, date} = req.body;
    const organizer_id = req.userId;
    try {
        const currentUser = await Organizer.findById(organizer_id)
        if(currentUser){
            let newEvent:EventType = {
                organizerId: currentUser?._id,
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