import express, { Application, Request, Response } from "express";
import cors from "cors";
import { OrdersRoutes } from "./app/modules/orders/orders.routes";
import { ProductsRoutes } from "./app/modules/products/product.routes";

export const app: Application = express();

app.use(express.json());
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to Assignment 2!");
});

app.use("/api/products", ProductsRoutes);
app.use("/api/orders", OrdersRoutes);
