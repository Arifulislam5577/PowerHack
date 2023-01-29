import React, { useEffect } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import {
  createNewBill,
  getAllBill,
  updateBillingInfo,
} from "../redux/services/billingService";
import { handleModal, reset } from "../redux/features/billingSlice";
import FormInput from "./FormInput";
const schema = yup.object({
  name: yup.string().required("Full Name is required").min(6).max(255),
  email: yup
    .string()
    .required("Email is required")
    .email("Must be a valid email")
    .max(255),
  phone: yup.string().required("Phone Number is required").min(11).max(11),
  amount: yup.string().required("Amount is required"),
});

const Modal = () => {
  const dispatch = useDispatch();
  const { loader, error, success, showModal, updateData } = useSelector(
    (state) => state.bills
  );
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    if (updateData) {
      const updateInfo = { _id: updateData._id, fullName: data.name, ...data };
      dispatch(updateBillingInfo(updateInfo));
    } else {
      dispatch(createNewBill(data));
    }
  };

  useEffect(() => {
    if (success) {
      dispatch(getAllBill({}));
      dispatch(reset());
    }
  }, [success, dispatch]);
  return (
    <>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="absolute inset-0 bg-gray-600 opacity-75"></div>
          <div className="relative z-10 m-8 bg-white p-10 max-w-sm rounded-md overflow-hidden">
            {error ? (
              <p className="text-sm text-red-500">{error}</p>
            ) : (
              <h1 className="text-center font-bold">
                {updateData ? "Update Bill Info" : "Add New Bill"}
              </h1>
            )}
            <button
              onClick={() => dispatch(handleModal())}
              className="bg-slate-900 flex items-center justify-center overflow-hidden text-white absolute top-0 right-0 h-8 w-8"
            >
              X
            </button>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="space-y-4">
                <FormInput
                  name="name"
                  placeholder="John Doe"
                  type="text"
                  label="Full Name"
                  errorMessage={errors.name?.message}
                  defaultValue={updateData ? updateData.fullName : ""}
                  register={{ ...register("name") }}
                />
                <FormInput
                  type="email"
                  placeholder="example@gmail.com"
                  name="email"
                  errorMessage={errors.email?.message}
                  label="Email Address"
                  defaultValue={updateData ? updateData.email : ""}
                  register={{ ...register("email") }}
                />
                <FormInput
                  type="number"
                  placeholder="+8801722****07"
                  name="phone"
                  errorMessage={errors.phone?.message}
                  label="Phone Number"
                  defaultValue={updateData ? updateData.phone : ""}
                  register={{ ...register("phone") }}
                />

                <FormInput
                  type="number"
                  placeholder="$2300"
                  name="amount"
                  errorMessage={errors.amount?.message}
                  label="Payable Amount"
                  defaultValue={updateData ? updateData.amount : ""}
                  register={{ ...register("amount") }}
                />
              </div>
              <div className="space-y-2">
                <div>
                  <button
                    type="submit"
                    disabled={loader}
                    className="w-full text-sm px-8 py-3 rounded-md bg-slate-900 text-white"
                  >
                    {loader
                      ? "Loading..."
                      : updateData
                      ? "Update Bill"
                      : "Submit Bill"}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
