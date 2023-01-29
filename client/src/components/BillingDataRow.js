import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  handleModal,
  handleUpdate,
  reset,
} from "../redux/features/billingSlice";
import {
  deleteBillingInfo,
  getAllBill,
} from "../redux/services/billingService";

const BillingDataRow = (props) => {
  const { _id, fullName, email, amount, phone } = props;
  const dispatch = useDispatch();
  const { success } = useSelector((state) => state.bills);
  const Update = (bill) => {
    dispatch(handleModal());
    dispatch(handleUpdate(bill));
  };

  const deleteBillInfo = (id) => {
    dispatch(deleteBillingInfo(id));
  };

  useEffect(() => {
    if (success) {
      dispatch(reset());
      dispatch(getAllBill());
    }
  }, [success, dispatch]);
  return (
    <>
      <tr className="bg-gray-100 border-b text-slate-900">
        <th className="px-6 py-4 font-normal">{_id}</th>
        <td className="px-6 py-4">{fullName}</td>
        <td className="px-6 py-4">{email}</td>
        <td className="px-6 py-4">{phone}</td>
        <td className="px-6 py-4">${amount}</td>
        <td className="px-6 py-4 flex gap-3">
          <button onClick={() => Update(props)}>Edit</button>|
          <button onClick={() => deleteBillInfo(_id)}>Delete</button>
        </td>
      </tr>
    </>
  );
};

export default BillingDataRow;
