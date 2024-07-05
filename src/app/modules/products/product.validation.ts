import { z } from "zod";
const inventoryValidationSchema = z.object({
  quantity: z.number({
    required_error: "Quantity is required",
  }),
  inStock: z.boolean({
    required_error: "InStock is required",
  }),
});

const variantValidationSchema = z.object({
  type: z.string({
    required_error: "Variant type is required",
  }),
  value: z.string({
    required_error: "Variant value is required",
  }),
});

const productValidationSchema = z.object({
  _id: z.string().optional(),
  name: z.string({
    required_error: "Name is required",
  }),
  description: z.string({
    required_error: "Description is required",
  }),
  price: z.number({
    required_error: "Price is required",
  }),
  category: z.string({
    required_error: "Category is required",
  }),
  tags: z.array(z.string(), {
    required_error: "Tags are required",
  }),
  variants: z.array(variantValidationSchema).default([]),
  inventory: inventoryValidationSchema,
});

export default productValidationSchema;
