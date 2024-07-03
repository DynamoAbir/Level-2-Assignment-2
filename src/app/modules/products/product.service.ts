import { Types } from "mongoose";

import { IProduct } from "./product.interface";
import MProducts from "./product.model";

const createProductIntoDB = async (Product: IProduct) => {
  const result = await MProducts.create(Product);
  return result;
};

const getAllProductsFromDB = async () => {
  const result = await MProducts.find();
  return result;
};

const getSingleProductFromDB = async (id: string) => {
  const result = await MProducts.findOne({ _id: new Types.ObjectId(id) });
  return result;
};

const updateSingleProductFromDB = async (
  id: string,
  updatedProduct: Partial<IProduct>
) => {
  const result = await MProducts.findOneAndUpdate(
    { _id: new Types.ObjectId(id) },
    { $set: updatedProduct },
    { new: true }
  );
  return result;
};

const deleteSingleProductFromDB = async (id: string) => {
  const result = await MProducts.deleteOne({ _id: new Types.ObjectId(id) });
  return result;
};

const findProductByTags = async (tag: string) => {
  const result = await MProducts.find({ tags: tag });
  return result;
};

export const ProductsService = {
  createProductIntoDB,
  getAllProductsFromDB,
  getSingleProductFromDB,
  updateSingleProductFromDB,
  deleteSingleProductFromDB,
  findProductByTags,
};
