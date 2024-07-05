import express from "express";
import { ProductsController } from "./product.controller";

const router = express.Router();
router.post("/", ProductsController.createProduct);
router.get("/", ProductsController.getAllProducts);
router.get("/:productId", ProductsController.getSingleProduct);
router.put("/:productId", ProductsController.updateProduct);
router.delete("/:productId", ProductsController.deleteProduct);
router.get("/?searchTerm/:tag", ProductsController.findByTags);

export const ProductsRoutes = router;
