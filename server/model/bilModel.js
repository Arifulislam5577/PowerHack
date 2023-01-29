import mongoose from "mongoose";
const { Schema, model } = mongoose;

const billSchema = new Schema(
  {
    fullName: {
      type: String,
      required: [true, "Please enter your fullname"],
    },
    email: {
      type: String,
      required: [true, "Please enter your email address"],
      lowercase: true,
      trim: true,
    },
    phone: {
      type: String,
      required: [true, "Please enter your phone number"],
      minlength: [11, "Phone Number must be 11 characters"],
    },
    amount: {
      type: Number,
      required: [true, "Please enter your bill amount"],
    },
  },
  { timestamps: true }
);

const Bill = model("Bill", billSchema);

export default Bill;
