import express from "express";
import { OrdersController } from "./orders.controller";
const router = express.Router();

router.post("/", OrdersController.createOrder);
router.get("/", OrdersController.getAllOrders);
router.get("/?email/:email", OrdersController.findByEmail);

export const OrdersRoutes = router;
