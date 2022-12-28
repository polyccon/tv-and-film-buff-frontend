import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { NavbarLink } from "../components/NavbarLink";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <nav
      className="navbar is-primary"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <a
            role="button"
            className={`navbar-burger burger ${isOpen && "is-active"}`}
            aria-label="menu"
            aria-expanded="false"
            onClick={() => setOpen(!isOpen)}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div className={`navbar-menu ${isOpen && "is-active"}`}>
          <div className="navbar-start">
            <NavbarLink url="/home" navLinkClass="navbar-item">
              Home
            </NavbarLink>
            <br />
            <NavbarLink url="/myfilms" navLinkClass="navbar-item">
              My Films
            </NavbarLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
