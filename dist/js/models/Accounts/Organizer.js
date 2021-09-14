"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const OrganizerSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    events: { type: mongoose_1.Schema.Types.ObjectId, required: false }
});
(0, mongoose_1.model)("organizers", OrganizerSchema);
