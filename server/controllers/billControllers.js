import catchAsync from "express-async-handler";
import Bill from "../model/bilModel.js";

export const addNewBill = catchAsync(async (req, res) => {
  const { fullName, email, phone, amount } = req.body;

  if (!fullName || !email || !phone || !amount) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const newBill = await Bill.create({
    fullName,
    email,
    phone,
    amount,
  });

  res.status(201).json(newBill);
});

export const getAllBillingList = catchAsync(async (req, res) => {
  const billList = await Bill.find();
  res.status(200).json(billList);
});

export const updateBillingInfo = catchAsync(async (req, res) => {
  const billInfo = await Bill.findByIdAndUpdate(req.params.id, req.body);

  if (billInfo) {
    return res.status(200).json(billInfo);
  } else {
    return res.status(500).json({ message: "Faild to update" });
  }
});
