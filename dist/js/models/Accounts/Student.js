"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const StudentSchema = new mongoose_1.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    registeredEvents: { type: mongoose_1.Schema.Types.ObjectId, required: false }
});
(0, mongoose_1.model)("students", StudentSchema);
