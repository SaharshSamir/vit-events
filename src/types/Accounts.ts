const {Document} = require('mongoose');

export interface student {
    firstName: String,
    lastName: String,
    userName: String,
    email: String,
    password: String,
    watchList?: Array<String>,
    registeredEvents?: Array<String>
}

export interface organizer{
    name: String,
    email: String,
    password: String,
    events?: Array<String>
}