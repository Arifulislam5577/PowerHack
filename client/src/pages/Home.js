import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../components/AddBillModal";
import Table from "../components/Table";
import { handleModal, handleUpdate } from "../redux/features/billingSlice";
import { getAllBill } from "../redux/services/billingService";

const Home = () => {
  const { showModal } = useSelector((state) => state.bills);
  const dispatch = useDispatch();
  const [keyword, setKeyword] = useState("");

  const handleAddBill = () => {
    dispatch(handleUpdate(null));
    dispatch(handleModal());
  };

  useEffect(() => {
    dispatch(getAllBill({ keyword }));
  }, [dispatch, keyword]);
  return (
    <section className="py-10">
      <div className="container">
        <div className="bg-white flex items-center justify-between">
          <div className="flex items-center gap-5">
            <h1 className="px-5 font-bold text-sm">Billing</h1>
            <form>
              <input
                type="search"
                className="border py-2 focus:outline-dashed placeholder:text-sm px-5 rounded bg-gray-200"
                placeholder="Search..."
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
              />
            </form>
          </div>

          <button
            onClick={handleAddBill}
            className="bg-slate-900 py-4 px-6 text-sm text-white"
          >
            Add New Bill
          </button>
        </div>
        <div className="my-5">
          <Table />
        </div>
        {showModal && <Modal />}
      </div>
    </section>
  );
};

export default Home;
