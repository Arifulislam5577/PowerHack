import catchAsync from "express-async-handler";
import Bill from "../model/bilModel.js";
import ApiFeature from "../utlis/apiFeature.js";

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
  const bills = await Bill.find();
  const totalBill = await Bill.countDocuments({
    $or: [
      { email: { $regex: req.query.searchBy, $options: "i" } },
      { phone: { $regex: req.query.searchBy, $options: "i" } },
      { fullName: { $regex: req.query.searchBy, $options: "i" } },
    ],
  });
  const totalAmount = bills.reduce((acc, bill) => acc + bill.amount, 0);
  const apiServices = new ApiFeature(
    Bill.find().sort({ createdAt: -1 }),
    req.query
  )
    .search()
    .paginate();

  const billList = await apiServices.query;
  res.status(200).json({ billList, totalBill, totalAmount });
});

export const updateBillingInfo = catchAsync(async (req, res) => {
  const billInfo = await Bill.findByIdAndUpdate(req.params.id, req.body);
  if (billInfo) {
    return res.status(200).json(billInfo);
  } else {
    return res.status(500).json({ message: "Faild to update" });
  }
});

export const deleteBillInfo = catchAsync(async (req, res) => {
  const billInfo = await Bill.findByIdAndDelete(req.params.id);
  if (billInfo) {
    return res.status(200).json({ message: "Delete Sucessful" });
  } else {
    return res.status(500).json({ message: "Faild to delete" });
  }
});
