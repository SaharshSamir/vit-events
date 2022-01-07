const { Document } = require("mongoose");

export interface student {
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  password: string;
}

export interface organizer {
  name: string;
  email: string;
  contactEmail: string,
  socials?: {
    instagram?: string,
    facebook?: string,
    twitter?: string,
    discord?: string
  }
  password?: string;
  posts?: Array<string>;
}
