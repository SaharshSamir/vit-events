import { Schema, model } from 'mongoose';
import { student } from '../../types/Accounts';

const StudentSchema: Schema = new Schema({
	firstName: { type: String, required: true },
	lastName: { type: String, required: true },
	name: { type: String, required: true },
	email: { type: String, required: true },
	password: { type: String, required: true },
	watchList: [{ type: Schema.Types.ObjectId, ref: 'Event' }]
});

model<student>('students', StudentSchema);
