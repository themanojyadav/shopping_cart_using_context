import React, { useContext } from "react";
import { BiAdjust } from "react-icons/bi";
import { Link, NavLink } from "react-router-dom";
import { CartContext } from "../context/cartContext";

function Header() {
  const cartContext = useContext(CartContext);

  const navLinkClasses = (isActive) => {
    if (isActive) {
      return "nav-link active";
    } else {
      return "nav-link";
    }
  };

  return (
    <header className="header">
      <div className="container d-flex flex-wrap justify-content-center py-3">
        <Link
          to="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white fw-bold text-decoration-none"
        >
          <span className="fs-4 d-flex align-items-center">
            <BiAdjust /> Shopping Cart
          </span>
        </Link>

        <ul className="nav nav-pills">
          <li className="nav-item">
            <NavLink
              to="/"
              className={({ isActive }) => navLinkClasses(isActive)}
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/cart"
              className={({ isActive }) => navLinkClasses(isActive)}
            >
              <span className="badge bg-danger">
                {cartContext.cartProducts.length}
              </span>{" "}
              Cart
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
