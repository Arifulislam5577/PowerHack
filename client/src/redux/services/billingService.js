import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const createNewBill = createAsyncThunk(
  "bill/createBill",
  async (billingInfo, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      const { name, email, amount, phone } = billingInfo;
      const { data } = await axios.post(
        `http://localhost:5000/api/add-billing`,
        { fullName: name, email, amount, phone },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return data;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);
export const getAllBill = createAsyncThunk(
  "bill/getAllBill",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      const { data } = await axios.get(
        `http://localhost:5000/api/billing-list`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return data;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);
export const updateBillingInfo = createAsyncThunk(
  "bill/updateBill",
  async (billingInfo, thunkAPI) => {
    const { _id, ...updateInfo } = billingInfo;
    try {
      const token = thunkAPI.getState().auth.user.token;
      const { data } = await axios.patch(
        `http://localhost:5000/api/update-billing/${_id}`,
        { ...updateInfo },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return data;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);
export const deleteBillingInfo = createAsyncThunk(
  "bill/deleteBill",
  async (billId, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      const { data } = await axios.delete(
        `http://localhost:5000/api/delete-billing/${billId}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return data;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);
