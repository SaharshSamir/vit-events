export interface organizer {
	name: string;
	email: string;
	password?: string;
	posts?: Array<string>;
}
export interface student {
	firstName: string;
	lastName: string;
	userName: string;
	email: string;
	password: string;
}
