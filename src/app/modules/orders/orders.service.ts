import { IProduct } from "../products/product.interface";
import { ProductsService } from "../products/product.service";
import { IOrders } from "./orders.interface";
import MOrders from "./orders.model";

const createOrderIntoDB = async (order: IOrders) => {
  try {
    const product: IProduct | null =
      await ProductsService.getSingleProductFromDB(order.productId);

    if (!product) {
      throw new Error("Product not found");
    }
    if (order.quantity > product.inventory.quantity) {
      throw new Error("Insufficient quantity available in inventory");
    }
    if (!product._id) {
      throw new Error("Product ID is missing");
    }

    const updatedQuantity = product.inventory.quantity - order.quantity;
    const inStock = updatedQuantity > 0;

    await ProductsService.updateSingleProductFromDB(product._id, {
      inventory: {
        quantity: updatedQuantity,
        inStock: inStock,
      },
    });

    const result = await MOrders.create(order);
    return result;
  } catch (error) {
    throw error;
  }
};

const getAllOrdersFromDB = async () => {
  const result = await MOrders.find();
  return result;
};

const findOrdersByEmail = async (email: string) => {
  const result = await MOrders.find({ email: email });
  return result;
};

export const OrdersService = {
  createOrderIntoDB,
  getAllOrdersFromDB,
  findOrdersByEmail,
};
