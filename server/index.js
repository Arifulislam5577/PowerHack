import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import userRouter from "./routes/userRoutes.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Server Running....");
});

// API

app.use("/api", userRouter);

// DATABASE CONNECTION
mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGODB_URI, () => {
  if (process.env.NODE_ENV === "DEVELOPMENT") {
    console.log(`Database connection Successfull`);
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  if (process.env.NODE_ENV === "DEVELOPMENT") {
    console.log(`App is Running at Port ${PORT}`);
  }
});
