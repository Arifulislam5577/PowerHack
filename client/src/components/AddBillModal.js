import React from "react";

const Modal = ({ isTrue, setShowModal }) => {
  return (
    <>
      {isTrue && (
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="absolute inset-0 bg-gray-600 opacity-75"></div>
          <div className="relative z-10 m-8 bg-white p-10 rounded-md overflow-hidden">
            <h1 className="text-center font-bold">Add New Bill</h1>
            <button
              onClick={() => setShowModal(false)}
              className="bg-slate-900 flex items-center justify-center overflow-hidden text-white absolute top-0 right-0 h-8 w-8"
            >
              X
            </button>

            <form className="space-y-4">
              <div className="space-y-4">
                <div>
                  <label for="name" className="block mb-2 text-sm">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="John Doe"
                    className="w-full px-3 py-2 placeholder:text-sm border rounded-md bg-gray-100"
                  />
                </div>
                <div>
                  <label for="email" className="block mb-2 text-sm">
                    Email address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="example@gmail.com"
                    className="w-full px-3 py-2 placeholder:text-sm border rounded-md bg-gray-100"
                  />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <label for="phone" className="text-sm">
                      Phone
                    </label>
                  </div>
                  <input
                    type="number"
                    name="phone"
                    id="phone"
                    placeholder="+8801722****07"
                    className="w-full px-3 py-2 placeholder:text-sm border rounded-md bg-gray-100"
                  />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <label for="amount" className="text-sm">
                      Payable Amount
                    </label>
                  </div>
                  <input
                    type="number"
                    name="amount"
                    id="amount"
                    placeholder="$2300"
                    className="w-full px-3 py-2 placeholder:text-sm border rounded-md bg-gray-100"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <div>
                  <button
                    type="button"
                    className="w-full px-8 py-3 rounded-md bg-slate-900 text-white"
                  >
                    Submit Bill
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
