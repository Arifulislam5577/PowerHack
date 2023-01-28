import React, { useState } from "react";
import Modal from "../components/AddBillModal";
import Table from "../components/Table";

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <section className="py-10">
      <div className="container">
        <div className="bg-white flex items-center justify-between">
          <h1 className="px-5 font-bold text-sm">Billing</h1>
          <form>
            <input
              type="search"
              className="border py-2 focus:outline-dashed placeholder:text-sm px-5 rounded bg-gray-200"
              placeholder="Search..."
            />
          </form>

          <button
            onClick={() => setShowModal(true)}
            className="bg-slate-900 py-4 px-6 text-sm text-white"
          >
            Add New Bill
          </button>
        </div>
        <div className="my-5">
          <Table />
        </div>
        {showModal && <Modal isTrue={showModal} setShowModal={setShowModal} />}
      </div>
    </section>
  );
};

export default Home;
