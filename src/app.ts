import express from "express";
import cors from "cors";
import { OrdersRoutes } from "./app/modules/orders/orders.routes";

export const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to Assignment 2!");
});

app.use("/api/orders", OrdersRoutes);
