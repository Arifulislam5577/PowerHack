import User from "../model/userModel.js";
import catchAsync from "express-async-handler";
import { generateToken } from "../utlis/generateToken.js";

export const registration = catchAsync(async (req, res) => {
  const { fullName, email, password } = req.body;
  if (!fullName || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(400).json({ message: "Email already exists" });
  }

  const user = await User.create({
    fullName,
    email,
    password,
  });

  res.status(201).json({
    _id: user._id,
    fullName: user.fullName,
    email: user.email,
    token: generateToken(user._id),
  });
});

export const login = catchAsync(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user && (await user.matchPassword(password))) {
    res.status(200).json({
      _id: user._id,
      fullName: user.fullName,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400).json({ message: "Invalid email or password" });
  }
});
