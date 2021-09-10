import {Request, Response} from "express";
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import {organizer, student } from '../../types/Accounts';
const {keys} = require('../../config/keys');
const Organizer = mongoose.model("organizers");;

const organizationLogin = async (req: Request, res: Response): Promise<Response> => {
    console.log("login controller");
    const {email, password} = req.body;

    try {

        const existingUser: any = await Organizer.findOne({email});
        if(!existingUser) throw "Account doesn't exists";        
        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);
        if(!isPasswordCorrect) throw "Incorrect Credentials";

        const token = jwt.sign({id: existingUser._id}, keys.JWT_SECRET_KEY, {expiresIn: "20h"})
        return res.status(200).json({existingUser, token});

    } catch (e) {
        return res.status(400).json({type: "error", message: e});
    }

}

const organizationSignup = async (req: Request, res: Response): Promise<Response> => {
    console.log("sign up controller");
    const {name, email, password} = req.body;
    
    try {

        const existingUser = await Organizer.findOne({email});
        if(existingUser) throw "Account already exists";

        const hashedPassword = await bcrypt.hash(password, 12);

        let newUser = {
            name,
            email,
            password: hashedPassword
        }

        let savedUser = await new Organizer(newUser).save();
        console.log(savedUser);

        const token = jwt.sign({id: savedUser._id}, keys.JWT_SECRET_KEY, {expiresIn: "20h"});

        return res.status(200).json({savedUser, token});
    } catch (e) {
        
        console.error(e);
        return res.status(400).json({type: "error", message: e});

    }


}


const test = (req: Request, res: Response): Response => {
    return res.status(200).json({message: "test"});
}


exports.organizationLogin = organizationLogin;
exports.organizationSignup = organizationSignup;
exports.test = test;