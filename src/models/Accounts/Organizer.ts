import { Schema, model } from "mongoose";
import { organizer } from "../../types/Accounts";

const OrganizerSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  contactEmail: {type: String, required: true},
  socials: {
    instagram: {type: String, required: false},
    facebook: {type: String, required: false},
    twitter: {type: String, required: false},
    discord: {type: String, required: false},
    required: false
  },
  password: { type: String },
  posts: { type: Schema.Types.ObjectId, required: false },
});

model<organizer>("organizers", OrganizerSchema);
