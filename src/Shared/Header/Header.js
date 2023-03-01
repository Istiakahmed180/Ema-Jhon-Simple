import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Contexts/UserContext";
import logo from "../../images/Logo.svg";
import "./Header.css";

const Header = () => {
  const { user, signOutUser } = useContext(AuthContext);

  return (
    <nav className="header">
      <Link to={"/"}>
        <img src={logo} alt="" />
      </Link>
      <li>
        <Link to="/order">Order</Link>
        <Link to="/order-review">Order Review</Link>
        <Link to="/manage-inventory">Manage Inventory</Link>
        {user?.uid ? (
          <button onClick={signOutUser} className="logout-button">
            Logout
          </button>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </li>
    </nav>
  );
};

export default Header;
