import User from "../model/userModel.js";
import catchAsync from "express-async-handler";

export const registration = catchAsync(async (req, res) => {
  const { fullName, email, password } = req.body;
  if (!fullName || !email || !password) {
    return res.status(400).json({ error: "All fields are required" });
  }

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(400).json({ error: "Email already exists" });
  }

  const user = await User.create({
    fullName,
    email,
    password,
  });

  res.status(201).json({ user });
});
