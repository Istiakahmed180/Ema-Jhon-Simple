import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/Logo.svg";
import "./Header.css";

const Header = () => {
  return (
    <nav className="header">
      <img src={logo} alt="" />
      <li>
        <Link to="/order">Order</Link>
        <Link to="/order-review">Order Review</Link>
        <Link to="/manage-inventory">Manage Inventory</Link>
        <Link to="/login">Login</Link>
      </li>
    </nav>
  );
};

export default Header;
