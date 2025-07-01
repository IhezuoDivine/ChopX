import "../Styles/Header.css";
import Nav from "../Components/Nav.jsx";
import React, { useState } from "react";

function Header({ showAuthLinks = true }) {
  const [isOpen, setIsOpen] = useState(false);

  const menu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <header>
      <div className="logo">
        <button className="menu" onClick={menu}>
          <i className="fas fa-bars menu"></i>
        </button>
        <h1>ChopX</h1>
      </div>
      {showAuthLinks && (
        <div className="authlinks">
          <button>LogIn</button>
          <button>SignUp</button>
        </div>
      )}
      <Nav isOpen={isOpen} toggleMenu={menu} />
    </header>
  );
}
export default Header;
