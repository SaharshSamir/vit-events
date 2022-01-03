import {model} from 'mongoose';
import {Request, Response} from 'express';
const Organizer = model('organizers') 

export const test = (req, res) => {
    res.send("hi");
}

export const getOrganizer = async (req, res: Response) : Promise<Response> => {
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
