import { Request, Response } from "express";
import { OrdersService } from "./orders.service";
import { IOrders } from "./orders.interface";

const createOrder = async (req: Request, res: Response) => {
  try {
    const order: IOrders = req.body;
    const result = await OrdersService.createOrderIntoDB(order);
    res.status(200).json({
      success: true,
      message: "Order created successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Couldn't create order into db",
      error: error.message,
    });
  }
};

const getAllOrders = async (req: Request, res: Response) => {
  try {
    const result = await OrdersService.getAllOrdersFromDB();
    res.status(200).json({
      success: true,
      message: "Orders fetched successfully!",
      data: result,
    });
  } catch (error: any) {
    res.status(404).json({
      success: false,
      message: "Couldn't find orders from db",
      error: error.message,
    });
  }
};

const findByEmail = async (req: Request, res: Response) => {
  try {
    const email = req.params.email;
    const result = await OrdersService.findOrdersByEmail(email);
    res.status(200).json({
      success: true,
      message: `Orders fetched successfully for ${email}!`,
      data: result,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: "Couldn't find order from db",
      error: error.message,
    });
  }
};
export const OrdersController = {
  createOrder,
  getAllOrders,
  findByEmail,
};