import { app } from "./app";
import mongoose from "mongoose";

const port = 5001;

main().catch((err) => console.log(err));

async function main() {
  try {
    await mongoose.connect(
      "mongodb+srv://assignment2:f3jvN8h10QRIdcxQ@cluster0.xv9x1yp.mongodb.net/ecommerce?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("Database connected");
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
}
