import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import bookRoute from "./route/book.route.js";
import userRouter from "./route/user.rout.js";
import cors from "cors";

dotenv.config();

const app = express();
const port = process.env.PORT;
const MongoURI = process.env.URI;

app.use(express.json());
app.use(cors());

const startServer = async () => {
  try {
    await mongoose.connect(MongoURI);
    console.log("✅ MongoDB connected");

    app.listen(port, () => {
      console.log(`🚀 Server is listening on port ${port}`);
    });
  } catch (error) {
    console.error("❌ MongoDB connection error:", error.message);
  }
};

app.use("/book", bookRoute);
app.use("/user", userRouter);

startServer();
