import express from "express";
import { login, registration } from "../controllers/userControllers.js";
const userRouter = express.Router();

userRouter.route("/registration").post(registration);
userRouter.route("/login").post(login);

export default userRouter;
