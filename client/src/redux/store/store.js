import { configureStore } from "@reduxjs/toolkit";
import { authReducers } from "../features/authSlice";
import { billReducers } from "../features/billingSlice";

const store = configureStore({
  reducer: {
    auth: authReducers,
    bills: billReducers,
  },
});

export default store;
