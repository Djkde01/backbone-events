import { Document } from "mongoose";

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
  category: { _id: string; name: string };
  organizer: {
    _id: string;
    firstName: string;
    lastName: string;
    imageUrl: string;
  };
  createdAt: Date;
  updatedAt: Date;
}

export interface ICategory extends Document {
  name: string;
}

export interface IOrder extends Document {
  createdAt: Date;
  stripeId: string;
  totalAmount: string;
  event: {
    _id: string;
    title: string;
  };
  buyer: {
    _id: string;
    firstName: string;
    lastName: string;
  };
}

export type IOrderItem = {
  _id: string;
  totalAmount: string;
  createdAt: Date;
  eventTitle: string;
  eventId: string;
  buyer: string;
};
