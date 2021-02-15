import React from "react";
import { IoFootball } from "react-icons/io5";
import { BsToggleOff, BsToggleOn } from "react-icons/bs";

const Navbar = ({ toggle, toggleTheme }) => {
  return (
    <nav>
      <div className="nav-center section">
        <div className="logo-wrap">
          <IoFootball className="logo" />
          <span className="logo-text">Footy Blog</span>
        </div>

        <button className="btn" onClick={toggleTheme}>
          {!toggle ? (
            <BsToggleOn className="logo-clr" />
          ) : (
            <BsToggleOff className="logo-clr" />
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
