"use server";

import { CreateCategoryParams } from "@/types";
import dbConnect from "../database";
import Category from "../database/models/category.model";
import { handleError } from "../utils";

export const createCategory = async ({
  categoryName,
}: CreateCategoryParams) => {
  try {
    await dbConnect();
    const newCategory = await Category.create({
      name: categoryName,
    });

    return JSON.parse(JSON.stringify(newCategory));
  } catch (error) {
    handleError(error);
  }
};

export const getAllCategories = async () => {
  try {
    await dbConnect();
    const categories = await Category.find({}).sort({ name: 1 });

    return JSON.parse(JSON.stringify(categories));
  } catch (error) {
    handleError(error);
  }
};
