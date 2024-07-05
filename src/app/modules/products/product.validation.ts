import { z } from "zod";
const inventoryValidationSchema = z.object({
  quantity: z
    .number()
    .int({ message: "Quantity must be an integer" })
    .positive({ message: "Quantity must be a positive number" })
    .nonnegative({ message: "Quantity must be a non-negative number" }),
  inStock: z.string().min(1, { message: "In stock status is required" }),
});

const variantValidationSchema = z.object({
  type: z.string().min(1, { message: "Variant type is required" }),
  value: z.string().min(1, { message: "Variant value is required" }),
});

const productValidationSchema = z.object({
  name: z.string().min(1, { message: "Product name is required" }),
  description: z
    .string()
    .min(1, { message: "Product description is required" }),
  price: z.number().positive({ message: "Price must be a positive number" }),
  category: z.string().min(1, { message: "Category is required" }),
  tags: z
    .array(z.string().min(1, { message: "Tag must be a non-empty string" }))
    .nonempty({ message: "Tags array must contain at least one tag" }),
  variants: z.array(variantValidationSchema).default([]),
  inventory: inventoryValidationSchema,
});

export { productValidationSchema };
