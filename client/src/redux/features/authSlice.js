import { createSlice } from "@reduxjs/toolkit";
import { createNewUser, loginUser, logOut } from "../services/authService";
const user = JSON.parse(localStorage.getItem("userInfo"));

const initialState = {
  user: user ? user : null,
  loading: false,
  error: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createNewUser.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(createNewUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loading = false;
        state.error = "";
      })
      .addCase(createNewUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loading = false;
        state.error = "";
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(logOut.fulfilled, (state, action) => {
        state.user = null;
      });
  },
});

export const authReducers = authSlice.reducer;
