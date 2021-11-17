import { Request, Response } from "express";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

import { organizer, student } from "../../types/Accounts";
import {Magic} from '@magic-sdk/admin';
import {getAuthToken, setTokenCookie} from '../../utils/cookieStuff';
// const { keys } = require('../../config/keys');
require("dotenv").config();
const Student = mongoose.model("students");

const magicSecret = process.env.MAGIC_SECRET_KEY ||  "";
const magic = new Magic(magicSecret);

export const login = async (req: Request, res: Response): Promise<Response> => {
    console.log("organization login controller");
    const { type, email, password } = req.body;
  
    try {
        let existingUser: any;
        existingUser = await Student.findOne({ email });
  
        if (!existingUser) throw "Account doesn't exists";
        const isPasswordCorrect = await bcrypt.compare(
            password,
            existingUser.password
        );
        if (!isPasswordCorrect) throw "Incorrect Credentials";
    
        let jwt_secret = process.env.JWT_SECRET_KEY || "";
    
        const token = jwt.sign({ id: existingUser._id }, jwt_secret, {
            expiresIn: "20h",
        });
        return res.status(200).json({ user: existingUser, token });
    } catch (e) {
        return res.status(400).json({ type: "error", message: e });
    }
};

export const studentSignup = async (
  req: Request,
  res: Response
): Promise<Response> => {
  let { firstName, lastName, email, password } = req.body;

  try {
    const existingUser = await Student.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "account exists" });
    }
    const hashedPassword = await bcrypt.hash(password, 12);
    const newUser = {
      firstName,
      lastName,
      name: `${firstName} ${lastName}`,
      email,
      password: hashedPassword,
    };
    const savedUser = await new Student(newUser).save();
    let jwt_secret = process.env.JWT_SECRET_KEY || "";
    const token = jwt.sign({ id: savedUser._id }, jwt_secret, {
      expiresIn: "20h",
    });

    return res.status(200).json({ token });
  } catch (e) {
    console.error(e);
    return res.status(400).json({ type: "error", message: e });
  }
};