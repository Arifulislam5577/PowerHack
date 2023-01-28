import mongoose from "mongoose";
const { Schema, model } = mongoose;

const billSchema = new Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
});

const Bill = model("Bill", billSchema);

export default Bill;
