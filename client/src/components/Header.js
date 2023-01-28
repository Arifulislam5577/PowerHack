import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white py-4">
      <div className="container">
        <nav className="bg-white flex items-center justify-between px-4 py-3">
          <div className="flex-shrink-0">
            <Link to="/" className="font-bold">
              PowerHack
            </Link>
          </div>
          <p className="text-sm font-medium text-main">Paid Total: $100</p>
        </nav>
      </div>
    </header>
  );
};

export default Header;
