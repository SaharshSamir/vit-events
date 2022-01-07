import {model} from 'mongoose';
import {Request, Response} from 'express';
import { organizer } from '../../types/Accounts';
const Organizer = model('organizers') 

export const test = (req, res) => {
    res.send("hi");
}

export const getOrganizer = async (req: any, res: any) => {
    // const userId = req.userId;
    // console.log(`req object:\n `);
    // console.log(req);
    console.log(req.userId);
    let organizerProfile;
    try {
        organizerProfile = await Organizer.findById(req.userId);
    } catch (e) {
        console.log(`error from getOrganizer: ${JSON.stringify(e)}`)
    }
    return res.status(200).json({ok: true,organizerProfile});
}

export const updateOrganizerInfo = async (req: any, res: any) => {
    const {organizer_id, name, email, contactEmail, socials} = req.body;
    try {
        const updatedOrganizer: organizer = {
            name,
            email,
            contactEmail,
            socials
        }
        const newUpdatedOrganizer = await Organizer.findByIdAndUpdate(organizer_id, updatedOrganizer, {new: true});
        res.status(200).json({ok: true, newUpdatedOrganizer});
    } catch (error) {
        res.status(200).json({ok: false, error})
    }
}
