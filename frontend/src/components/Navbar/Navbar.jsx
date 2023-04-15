import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Navbar.scss";
import Logo from "../../img/box_logo.svg";
import { Link } from "react-router-dom";
import { logout } from "../../actions/userActions";

const Navbar = () => {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const [openDropdown, setOpenDropdown] = useState(false);
  const [openDropdown2, setOpenDropdown2] = useState(false);
  const { userInfo } = userLogin;
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const toggleDropdown = () => setOpenDropdown(!openDropdown);
  const toggleDropdown2 = () => setOpenDropdown2(!openDropdown2);

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary bg-white px-2">
      <div className="container">
        <Link className="navbar-brand" to={"/"}>
          <img src={Logo} alt="" className="logo" />
        </Link>
        <button
          className="navbar-toggler border-0 m-0 p-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav links mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to={"/"}>
                Home
              </Link>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Pricing
              </a>
            </li>
          </ul>
          <div className="right d-flex align-items-center">
            {userInfo && userInfo.isAdmin && (
              <li className="nav-item btn btn-sm btn-outline-dark dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownII"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Admin
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownII"
                >
                  <li>
                    <Link className="dropdown-item" to={"/admin/userlist"}>
                      Users
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to={"/admin/productlist"}>
                      Products
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to={"/admin/orderlist"}>
                      Orders
                    </Link>
                  </li>
                </ul>
              </li>
            )}
            {userInfo ? (
              <li className="nav-item btn btn-sm btn-outline-dark dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="10"
                    fill="currentColor"
                    className="bi bi-person"
                    viewBox="0 0 20 20"
                  >
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
                  </svg>
                  {userInfo.name}
                </a>
                <div className={`dropdown-menu ${openDropdown ? "show" : ""}`}>
                  <Link className="link-dark dropdown-item" to="/profile">
                    Profile
                  </Link>
                  <Link
                    className="link-dark dropdown-item"
                    onClick={logoutHandler}
                  >
                    Logout
                  </Link>
                </div>
              </li>
            ) : (
              <Link
                className="d-flex align-items-center btn btn-sm btn-outline-dark"
                to={"/login"}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="10"
                  fill="currentColor"
                  className="bi bi-person"
                  viewBox="0 -1 20 20"
                >
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
                </svg>
                Login
              </Link>
            )}
            <Link to={"/cart"} className="btn btn-dark btn-sm">
              Cart: ({cartItems.reduce((acc, item) => acc + item.qty, 0)})
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
