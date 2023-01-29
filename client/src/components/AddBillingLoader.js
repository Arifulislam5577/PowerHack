import React from "react";

const AddBillingLoader = () => {
  return (
    <tr className="bg-gray-100 border-b text-slate-900">
      <th className="px-6 py-4 ">Generating ID...</th>
      <td className="px-6 py-4"></td>
      <td className="px-6 py-4"></td>
      <td className="px-6 py-4"></td>
      <td className="px-6 py-4"></td>
      <td className="px-6 py-4 flex gap-3">
        <button>Edit</button>|<button>Delete</button>
      </td>
    </tr>
  );
};

export default AddBillingLoader;
