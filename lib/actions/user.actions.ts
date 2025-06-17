"use server";

import { CreateUserParams, UpdateUserParams } from "@/types";
import { handleError } from "../utils";
import dbConnect from "../database";
import User from "../database/models/user.model";

export const createUser = async (user: CreateUserParams) => {
  try {
    await dbConnect();

    const newUser = await User.create(user);

    return JSON.parse(JSON.stringify(newUser));
  } catch (error) {
    handleError(error);
  }
};

export const getUserById = async (id: string) => {
  try {
    await dbConnect();

    const user = await User.findById(id);

    if (!user) {
      throw new Error("User not found");
    }

    return JSON.parse(JSON.stringify(user));
  } catch (error) {
    handleError(error);
  }
};

export const updateUser = async (
  clerkId: string,
  userData: Partial<UpdateUserParams>
) => {
  try {
    await dbConnect();

    const updatedUser = await User.findByIdAndUpdate(
      clerkId,
      { $set: userData },
      { new: true, runValidators: true }
    );
    if (!updatedUser) {
      throw new Error("User not found");
    }
    return JSON.parse(JSON.stringify(updatedUser));
  } catch (error) {
    handleError(error);
  }
};

export const deleteUser = async (id: string) => {
  try {
    await dbConnect();

    const deletedUser = await User.findByIdAndDelete(id);

    if (!deletedUser) {
      throw new Error("User not found");
    }

    return JSON.parse(JSON.stringify(deletedUser));
  } catch (error) {
    handleError(error);
  }
};
