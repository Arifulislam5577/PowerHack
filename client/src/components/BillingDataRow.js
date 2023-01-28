import React from "react";

const BillingDataRow = () => {
  return (
    <tr className="bg-gray-100 border-b text-slate-900">
      <th className="px-6 py-4 ">sdsdskk112kekk213</th>
      <td className="px-6 py-4">Md Ariful Islam</td>
      <td className="px-6 py-4">arif@gmail.com</td>
      <td className="px-6 py-4">01722903107</td>
      <td className="px-6 py-4">$230</td>
      <td className="px-6 py-4 flex gap-3">
        <button>Edit</button>|<button>Delete</button>
      </td>
    </tr>
  );
};

export default BillingDataRow;
