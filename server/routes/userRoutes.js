import express from "express";
import { registration } from "../controllers/userControllers.js";
const userRouter = express.Router();

userRouter.route("/registration").post(registration);

export default userRouter;
