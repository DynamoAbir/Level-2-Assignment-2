import { Types } from "mongoose";
import { IOrders } from "./orders.interface";
import MOrders from "./orders.model";

const createOrderIntoDB = async (order: IOrders) => {
  const result = await MOrders.create(order);
  return result;
};

const getAllOrdersFromDB = async () => {
  const result = await MOrders.find();
  return result;
};

const getSingleOrderFromDB = async (id: string) => {
  const result = await MOrders.findOne({ _id: new Types.ObjectId(id) });
  return result;
};

export const OrdersService = {
  createOrderIntoDB,
  getAllOrdersFromDB,
  getSingleOrderFromDB,
};
