import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const createNewUser = createAsyncThunk(
  "auth/createUser",
  async (userInfo, thunkAPI) => {
    try {
      const { name, email, password } = userInfo;
      const { data } = await axios.post(
        `http://localhost:5000/api/registration`,
        { fullName: name, email, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      localStorage.setItem("userInfo", JSON.stringify(data));
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

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (userInfo, thunkAPI) => {
    try {
      const { email, password } = userInfo;

      const { data } = await axios.post(
        `http://localhost:5000/api/login`,
        { email, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      localStorage.setItem("userInfo", JSON.stringify(data));
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

export const logOut = createAsyncThunk("auth/logout", async () => {
  localStorage.removeItem("userInfo");
});
