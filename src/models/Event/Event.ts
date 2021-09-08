import { Schema, model} from "mongoose";

const EventSchema: Schema = new Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    date: {type: Date, required: true, default: Date.now()},
})