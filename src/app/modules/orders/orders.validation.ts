import { z } from "zod";

const orderValidationSchema = z.object({
  email: z
    .string()
    .email({ message: "Email is not valid" })
    .min(1, { message: "Email is required" }),
  productId: z.string().min(1, { message: "Product ID is required" }),
  price: z.number().positive({ message: "Price cann't be in negative" }),
  quantity: z
    .number()
    .int({ message: "Quanitity must be an integer" })
    .positive({ message: "Quantity must be a positive number" }),
});
export { orderValidationSchema };
