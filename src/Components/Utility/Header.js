import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../Img/LogoL.png";
import "../../index.css";
function Header() {
  const [user, setUser] = useState(null);
  const [isAdmin, setAdmin] = useState("");
  useEffect(() => {
    // Fetch user information from localStorage
    const userData = localStorage.getItem("userData");
    if (userData) {
      setUser(JSON.parse(userData));
    }

    const isAdmin = localStorage.getItem("isAdmin");
    // console.log(isAdmin);
    setAdmin(isAdmin);
    // console.log(userData);
  }, []);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-white text-primary">
        <Link className="navbar-brand" to="/">
          <img className="img-logo mx-md-5" src={Logo} alt="" />
        </Link>
        <button
          className="navbar-toggler border-0"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="bx bx-menu-alt-right" id="menu-icon"></i>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active mx-md-2">
              <Link className="nav-link" to="/home">
                <i className="bx bx-home header-icon"></i>Home
                <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item mx-md-2">
              <Link className="nav-link" to="/booking">
                <i className="bx bx-book header-icon"></i> Booking
              </Link>
            </li>
            <li className="nav-item mx-md-2">
              <Link className="nav-link" to="/weather">
                <i className="bx bx-cloud header-icon"></i> Forecast
              </Link>
            </li>
            <li className="nav-item mx-md-2">
              <Link className="nav-link" to="/about">
                <i className="bx bx-info-circle header-icon"></i> About Us
              </Link>
            </li>
            <li className="nav-item mx-md-2">
              <Link className="nav-link" to="/contact">
                <i className="bx bx-phone header-icon"></i> Contact Us
              </Link>
            </li>
            <li className="nav-item mx-md-2">
              {isAdmin == "true" ? ( // Check if user isAdmin
                <Link className="nav-link" to="/dashboard">
                  <i className="bx bx-info-circle header-icon"></i> Dashboard
                </Link>
              ) : (
                ""
              )}
            </li>

            <li
              className="nav-item dropdown mx-md-2"
              style={{ cursor: "pointer" }}
            >
              <p
                className="nav-link dropdown-toggle"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="bx bx-package header-icon"></i> Services
              </p>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link className="dropdown-item" to="/tracking">
                  <i className="bx bxs-ship header-icon"></i> Tracking
                </Link>
                <Link className="dropdown-item" to="ship-information-user">
                  <i className="bx bx-calendar header-icon"></i> Scheduling
                </Link>
                <div className="dropdown-divider"></div>
                <Link className="dropdown-item" to="/shipping-refund-policy">
                  <i className="bx bx-library header-icon"></i> Refund Policy
                </Link>
              </div>
            </li>

            <li
              className="nav-item dropdown mx-md-2"
              style={{ cursor: "pointer" }}
            >
              <p
                className="nav-link dropdown-toggle"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="bx bx-universal-access header-icon"></i> Help
              </p>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link className="dropdown-item" to="/document-list">
                  <i className="bx bx-file header-icon"></i> Important Documents
                </Link>
                <div className="dropdown-divider"></div>
                <Link className="dropdown-item" to="/terms-of-services">
                  <i className="bx bxs-file-doc header-icon"></i> Terms of
                  Services
                </Link>
                <Link className="dropdown-item" to="/help-center">
                  <i className="bx bx-question-mark header-icon"></i> Help
                  Center
                </Link>
              </div>
            </li>
          </ul>

          {/* -------Conditional rendering based on user authentication and isAdmin status----- */}
          {/* Conditional rendering based on user authentication */}
          {user ? (
            <div className="d-flex align-items-center">
              <i
                className="bx bx-user-circle mr-2"
                style={{ fontSize: "24px" }}
              ></i>
              <Link
                to="user-profile"
                className="mr-2 shine-animation" // Apply the shine-animation class here
              >
                {user.name}
              </Link>
            </div>
          ) : (
            <Link
              to="/login"
              className="px-4 btn bg-primary text-white px-5 my-3 mr-6 my-sm-0"
            >
              Login
            </Link>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Header;
