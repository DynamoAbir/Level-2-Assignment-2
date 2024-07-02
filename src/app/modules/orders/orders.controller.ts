import { Request, Response } from "express";
import { OrdersService } from "./orders.service";

const createOrder = async (req: Request, res: Response) => {
  try {
    const order = req.body;
    const result = await OrdersService.createOrderIntoDB(order);
    res.status(200).json({
      success: true,
      message: "Product created successfully",
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
      message: "Products fetched successfully!",
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
const getSingleOrder = async (req: Request, res: Response) => {
  try {
    const id = req.params.productId;
    const result = await OrdersService.getSingleOrderFromDB(id);
    res.status(200).json({
      success: true,
      message: "Order fetched successfully!",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Couldn't find order from db",
      error: error.message,
    });
  }
};

export const OrdersController = {
  createOrder,
  getAllOrders,
  getSingleOrder,
};
