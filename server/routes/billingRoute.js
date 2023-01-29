import express from "express";
import {
  addNewBill,
  getAllBillingList,
  updateBillingInfo,
} from "../controllers/billControllers.js";
import { protectedRoute } from "../middleware/authMiddleware.js";
const billingRouter = express.Router();

billingRouter.route("/add-billing").post(protectedRoute, addNewBill);
billingRouter.route("/billing-list").get(protectedRoute, getAllBillingList);
billingRouter
  .route("/update-billing/:id")
  .patch(protectedRoute, updateBillingInfo);

export default billingRouter;
