import React from "react";
import BillingDataRow from "./BillingDataRow";
import Pagination from "./Pagination";

const Table = () => {
  return (
    <div className="relative overflow-x-auto">
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
          <BillingDataRow />
          <BillingDataRow />
          <BillingDataRow />
          <BillingDataRow />
          <BillingDataRow />
          <BillingDataRow />
          <BillingDataRow />
          <BillingDataRow />
          <BillingDataRow />
          <BillingDataRow />
        </tbody>
      </table>

      <div className="mt-5">
        <Pagination />
      </div>
    </div>
  );
};

export default Table;
