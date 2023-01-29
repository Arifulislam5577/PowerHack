import { configureStore } from "@reduxjs/toolkit";
import { authReducers } from "../features/authSlice";
import { billReducers } from "../features/billingSlice";

const store = configureStore({
  reducer: {
    auth: authReducers,
    bills: billReducers,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["bill/handleUpdate"],
        ignoredActionPaths: ["bills.updateData.deleteBillInfo"],
        ignoredPaths: ["bills.updateData.deleteBillInfo"],
      },
    }),
});

export default store;
