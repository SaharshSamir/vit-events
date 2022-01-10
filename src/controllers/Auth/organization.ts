import {getAuthToken, setTokenCookie} from '../../utils/cookieStuff';
import {Magic, MagicUserMetadata} from '@magic-sdk/admin';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';

import { organizer, student } from "../../types/Accounts";

const Organizer = mongoose.model("organizers");
const magicSecret = process.env.MAGIC_SECRET_KEY ||  "";
const magic = new Magic(magicSecret);


export const organizationAuth = async (req, res) => {
    res.removeHeader('Access-Control-Allow-Origin');
    const did = magic.utils.parseAuthorizationHeader(req.body.headers.Authorization);
    let user: MagicUserMetadata;
  
    try {
      user = await magic.users.getMetadataByToken(did);
    } catch (e) {
      console.log("Error from organization auth: \n");
      console.log(e);
      return res.status(500).json({error_msg: "something went wrong", error: e});
    }

    const existingOrganizer = await Organizer.findOne({email: user.email});
    let savedOrganizer;
    if(!existingOrganizer){
        const newOrganizer: organizer = {
            email: user.email as string,
            name: user.email as string,
            contactEmail: user.email as string
        } 
        savedOrganizer = await new Organizer(newOrganizer).save();
    }
    console.log(`user: \n ${JSON.stringify(user)}`);
    let jwt_secret = process.env.JWT_SECRET_KEY || "";
    const payload = savedOrganizer || existingOrganizer;
    const token: string = jwt.sign({userId: payload._id}, jwt_secret, {expiresIn: "20h"});
    // setTokenCookie(res, token);
    res.cookie('api_token', token);
    res.cookie('is_auth', true);
  
    return res.status(200).json({ok: true});
  
}
