import express from "express";
import { OrdersController } from "./orders.controller";
const router = express.Router();

router.post("/", OrdersController.createOrder);
router.get("/", OrdersController.getAllOrders);
router.get("/:productId", OrdersController.getSingleOrder);

export const OrdersRoutes = router;
