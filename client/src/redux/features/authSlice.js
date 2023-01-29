import { createSlice } from "@reduxjs/toolkit";
import { createNewUser, loginUser } from "../services/authService";
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
    builder.addCase(createNewUser.pending, (state) => {
      state.loading = true;
      state.error = "";
    });

    builder.addCase(createNewUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.loading = false;
      state.error = "";
    });

    builder.addCase(createNewUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    builder.addCase(loginUser.pending, (state) => {
      state.loading = true;
      state.error = "";
    });

    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.loading = false;
      state.error = "";
    });

    builder.addCase(loginUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export const authReducers = authSlice.reducer;
