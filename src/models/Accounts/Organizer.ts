import { Schema, model } from "mongoose";
import { organizer } from "../../types/Accounts";

const OrganizerSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  posts: { type: Schema.Types.ObjectId, required: false },
});

model<organizer>("organizers", OrganizerSchema);
