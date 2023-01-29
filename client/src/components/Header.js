import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logOut } from "../redux/services/authService";

const Header = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { billInfo } = useSelector((state) => state.bills);
  return (
    <header className="bg-white py-4">
      <div className="container">
        <nav className="bg-white flex items-center justify-between px-4 py-3">
          <div className="flex-shrink-0">
            <Link to="/" className="font-bold">
              PowerHack
            </Link>
          </div>
          <div className="flex items-center justify-between gap-3">
            {user ? (
              <p className="text-sm font-bold text-main">
                Paid Total: $
                <span className="text-orange-500">{billInfo?.totalAmount}</span>
              </p>
            ) : null}
            {user ? (
              <button
                onClick={() => dispatch(logOut())}
                className="bg-orange-500 px-3 py-1 text-white text-sm rounded"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/login"
                className="bg-slate-900 px-3 py-1 text-white text-sm rounded"
              >
                Login
              </Link>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
