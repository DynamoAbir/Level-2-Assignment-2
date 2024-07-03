import { Schema, model } from "mongoose";
import { IOrders } from "./orders.interface";

const OrderSchema = new Schema<IOrders>({
  email: { type: String, required: true },
  productId: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
});

const MOrders = model<IOrders>("Orders", OrderSchema);
export default MOrders;
