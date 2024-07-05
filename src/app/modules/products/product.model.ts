import { Schema, model } from "mongoose";

import { IProduct, IVariant } from "./product.interface";

const InventorySchema = new Schema({
  quantity: { type: Number, required: true },
  inStock: { type: Boolean, required: true },
});

const VariantSchema = new Schema<IVariant>({
  type: { type: String, required: true },
  value: { type: String, required: true },
});

const ProductSchema = new Schema<IProduct>(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    tags: { type: [String], required: true },
    variants: { type: [VariantSchema], default: [] },
    inventory: { type: InventorySchema, required: true },
  },
  { _id: true }
);

const MProducts = model<IProduct>("Products", ProductSchema);
export default MProducts;
