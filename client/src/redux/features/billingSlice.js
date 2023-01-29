import { createSlice } from "@reduxjs/toolkit";
import {
  createNewBill,
  getAllBill,
  updateBillingInfo,
} from "../services/billingService";

const initialState = {
  billList: [],
  loading: false,
  loader: false,
  error: "",
  success: false,
  showModal: false,
  updateData: null,
};

const billSlice = createSlice({
  name: "bill",
  initialState,
  reducers: {
    reset(state) {
      state.loading = false;
      state.loader = false;
      state.error = "";
      state.success = false;
      state.showModal = false;
    },

    handleModal(state) {
      state.showModal = !state.showModal;
    },

    handleUpdate(state, action) {
      state.updateData = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createNewBill.pending, (state) => {
        state.loader = true;
        state.error = "";
      })
      .addCase(createNewBill.fulfilled, (state, action) => {
        state.loader = false;
        state.success = true;
        state.error = "";
      })
      .addCase(createNewBill.rejected, (state, action) => {
        state.loader = false;
        state.error = action.payload;
      })
      .addCase(getAllBill.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(getAllBill.fulfilled, (state, action) => {
        state.loading = false;
        state.billList = action.payload;
        state.error = "";
      })
      .addCase(getAllBill.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(updateBillingInfo.pending, (state) => {
        state.loader = true;
        state.error = "";
      })
      .addCase(updateBillingInfo.fulfilled, (state, action) => {
        state.loader = false;
        state.success = true;
        state.error = "";
      })
      .addCase(updateBillingInfo.rejected, (state, action) => {
        state.loader = false;
        state.error = action.payload;
      });
  },
});

export const billReducers = billSlice.reducer;
export const { reset, handleModal, handleUpdate } = billSlice.actions;
