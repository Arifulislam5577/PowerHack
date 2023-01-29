import express from "express";
import {
  addNewBill,
  deleteBillInfo,
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
billingRouter
  .route("/delete-billing/:id")
  .delete(protectedRoute, deleteBillInfo);

export default billingRouter;
