import React, { useCallback, useEffect, useState } from "react";
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
import AddBillingLoader from "./AddBillingLoader";
import BillingDataRow from "./BillingDataRow";
import Pagination from "./Pagination";

const Table = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const { loader, billInfo, error, success } = useSelector(
    (state) => state.bills
  );
  const pageNumber = Math.ceil(billInfo?.totalBill / 10);

  // UPDATE DATA

  // DELETE DATA
  const deleteBillInfo = useCallback(
    (id) => {
      dispatch(deleteBillingInfo(id));
      dispatch(reset());
    },
    [dispatch]
  );

  useEffect(() => {
    if (success || page) {
      dispatch(getAllBill({ page }));
    }
  }, [dispatch, page, success]);

  return (
    <div className="relative overflow-x-auto">
      {error}
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-sm text-slate-900 uppercase bg-white">
          <tr>
            <th scope="col" className="px-6 py-5">
              Billing ID
            </th>
            <th scope="col" className="px-6 py-5">
              Full Name
            </th>
            <th scope="col" className="px-6 py-5">
              Email
            </th>
            <th scope="col" className="px-6 py-5">
              Phone
            </th>
            <th scope="col" className="px-6 py-5">
              Paid Amount
            </th>
            <th scope="col" className="px-6 py-5">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {loader && <AddBillingLoader />}

          {billInfo?.billList?.map((bill) => (
            <BillingDataRow
              key={bill._id}
              {...bill}
              deleteBillInfo={deleteBillInfo}
            />
          ))}
        </tbody>
      </table>

      <div className={`${pageNumber < 1 ? "hidden" : "mt-5"}`}>
        <Pagination pageNumber={pageNumber} page={page} setPage={setPage} />
      </div>
    </div>
  );
};

export default Table;
