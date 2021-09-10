"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const { keys } = require('../../config/keys');
const Organizer = mongoose_1.default.model("organizers");
;
const organizationLogin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("login controller");
    const { email, password } = req.body;
    try {
        const existingUser = yield Organizer.findOne({ email });
        if (!existingUser)
            throw "Account doesn't exists";
        const isPasswordCorrect = yield bcrypt_1.default.compare(password, existingUser.password);
        if (!isPasswordCorrect)
            throw "Incorrect Credentials";
        const token = jsonwebtoken_1.default.sign({ id: existingUser._id }, keys.JWT_SECRET_KEY, { expiresIn: "20h" });
        return res.status(200).json({ existingUser, token });
    }
    catch (e) {
        return res.status(400).json({ type: "error", message: e });
    }
});
const organizationSignup = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("sign up controller");
    const { name, email, password } = req.body;
    try {
        const existingUser = yield Organizer.findOne({ email });
        if (existingUser)
            throw "Account already exists";
        const hashedPassword = yield bcrypt_1.default.hash(password, 12);
        let newUser = {
            name,
            email,
            password: hashedPassword
        };
        let savedUser = yield new Organizer(newUser).save();
        console.log(savedUser);
        const token = jsonwebtoken_1.default.sign({ id: savedUser._id }, keys.JWT_SECRET_KEY, { expiresIn: "20h" });
        return res.status(200).json({ savedUser, token });
    }
    catch (e) {
        console.error(e);
        return res.status(400).json({ type: "error", message: e });
    }
});
const test = (req, res) => {
    return res.status(200).json({ message: "test" });
};
exports.organizationLogin = organizationLogin;
exports.organizationSignup = organizationSignup;
exports.test = test;
