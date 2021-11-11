import { Request, Response } from "express";
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { organizer, student } from '../../types/Accounts';
// const { keys } = require('../../config/keys');
require("dotenv").config();
const Organizer = mongoose.model("organizers");
const Student = mongoose.model("students");


//login function for both student and organizer
export const login = async (req: Request, res: Response): Promise<Response> =>
{
    console.log("organization login controller");
    const { type, email, password } = req.body;

    try
    {
        let existingUser: any;
        if (type == "ORGANIZER")
        {
            existingUser = await Organizer.findOne({ email });
        } else if (type == 'STUDENT')
        {
            existingUser = await Student.findOne({ email });
        }

        if (!existingUser) throw "Account doesn't exists";
        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);
        if (!isPasswordCorrect) throw "Incorrect Credentials";

        let jwt_secret = process.env.JWT_SECRET_KEY || "";

        const token = jwt.sign({ id: existingUser._id }, jwt_secret, { expiresIn: "20h" })
        return res.status(200).json({ user: existingUser, token });

    } catch (e)
    {
        return res.status(400).json({ type: "error", message: e });
    }

}

//signup function for organizers
export const organizationSignup = async (req: Request, res: Response): Promise<Response> =>
{
    console.log("sign up controller");
    const { name, email, password } = req.body;

    try
    {

        const existingUser = await Organizer.findOne({ email });
        if (existingUser) throw "Account already exists";

        const hashedPassword = await bcrypt.hash(password, 12);

        let newUser = {
            name,
            email,
            password: hashedPassword
        }

        let savedUser = await new Organizer(newUser).save();
        console.log(savedUser);

        let jwt_secret = process.env.JWT_SECRET_KEY || "";
        const token = jwt.sign({ id: savedUser._id }, jwt_secret, { expiresIn: "20h" });

        return res.status(200).json({ user: savedUser, token });
    } catch (e)
    {

        console.error(e);
        return res.status(400).json({ type: "error", message: e });

    }
}

//signup function for students
export const studentSignup = async (req: Request, res: Response): Promise<Response> =>
{
    let { firstName, lastName, email, password } = req.body;

    try
    {
        const existingUser = await Student.findOne({ email });
        if (existingUser) throw "Account already exists";
        const hashedPassword = await bcrypt.hash(password, 12);
        const newUser = {
            firstName,
            lastName,
            name: `${firstName} ${lastName}`,
            email,
            password: hashedPassword
        }
        const savedUser = await new Student(newUser).save();
        let jwt_secret = process.env.JWT_SECRET_KEY || "";
        const token = jwt.sign({ id: savedUser._id }, jwt_secret, { expiresIn: "20h" });

        return res.status(200).json({ token });
    } catch (e)
    {
        console.error(e);
        return res.status(400).json({ type: "error", message: e });
    }
}


// exports.login = login;
// exports.organizationSignup = organizationSignup;
// exports.studentSignup = studentSignup;
