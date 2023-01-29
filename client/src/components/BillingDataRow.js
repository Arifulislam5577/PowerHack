import React from "react";
import { useDispatch } from "react-redux";
import { handleModal, handleUpdate } from "../redux/features/billingSlice";

const BillingDataRow = (props) => {
  const { _id, fullName, email, amount, phone } = props;
  const dispatch = useDispatch();
  const Update = (bill) => {
    dispatch(handleModal());
    dispatch(handleUpdate(bill));
  };
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
          <button>Delete</button>
        </td>
      </tr>
    </>
  );
};

export default BillingDataRow;
