import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import userRouter from "./routes/userRoutes.js";
import { errorHandler, notFound } from "./middleware/errorHandler.js";
import billingRouter from "./routes/billingRoute.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Server Running....");
});

// API

app.use("/api", userRouter);
app.use("/api", billingRouter);

//ERROR HANDLEING

app.use(notFound);
app.use(errorHandler);

// DATABASE CONNECTION
mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    if (process.env.NODE_ENV === "DEVELOPMENT") {
      console.log(`Database connection Successfull`);
    }
  })
  .catch((err) => {
    console.log(err);
  });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  if (process.env.NODE_ENV === "DEVELOPMENT") {
    console.log(`App is Running at Port ${PORT}`);
  }
});
