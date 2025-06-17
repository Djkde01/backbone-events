import { Document } from 'mongoose';

export interface IUser extends Document {
  clerkId: string;
  email: string;
  username: string;
  firstName: string;
  lastName: string;
  imageUrl: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IEvent extends Document {
  title: string;
  description?: string;
  imageUrl: string;
  startDateTime: Date;
  endDateTime: Date;
  location?: string;
  price: number;
  currency: string;
  isFree: boolean;
  url: string;
  category: {_id: string, name: string};
  organizer: {_id: string, firstName: string, lastName: string, imageUrl: string};
  createdAt: Date;
  updatedAt: Date;
}