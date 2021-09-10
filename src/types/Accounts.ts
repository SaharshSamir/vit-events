const {Document} = require('mongoose');

export interface student {
    firstName: string,
    lastName: string,
    userName: string,
    email: string,
    password: string,
    watchList?: Array<string>,
    registeredEvents?: Array<string>
}

export interface organizer{
    name: string,
    email: string,
    password: string,
    events?: Array<string>
}