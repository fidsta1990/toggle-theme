import React from "react";
import { IoFootball } from "react-icons/io5";
import { BsToggleOff, BsToggleOn } from "react-icons/bs";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-center section">
        <IoFootball className="logo" />
        <p>Navbar</p>
        <button className="btn"></button>
      </div>
    </nav>
  );
};

export default Navbar;
