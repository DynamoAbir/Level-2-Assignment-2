import { app } from "./app";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const port = 5001;

main().catch((err) => console.log(err));

async function main() {
  try {
    await mongoose.connect(process.env.DB_URL as string);

    app.listen(port, () => {
      console.log(`Example app listening on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}
