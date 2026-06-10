import "./Navbar.scss";

import logo from "../../assets/images/logo.png";

import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {

  const [sticky, setSticky] = useState(false);

  const location = useLocation();

  const isHome = location.pathname === "/";

  useEffect(() => {

    const handleScroll = () => {

      if (window.scrollY > 80) {
        setSticky(true);
      } else {
        setSticky(false);
      }

    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  return (
    <nav
      className={`navbar navbar-expand-lg custom-navbar
      ${sticky ? "sticky-nav" : ""}
      ${isHome ? "home-navbar" : "inner-navbar"}
      `}
    >
      <div className="container">

        {/* LOGO */}
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="Datacharya" />
        </Link>

        {/* TOGGLE */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* MENU */}
        <div className="collapse navbar-collapse" id="navbarContent">

          <ul className="navbar-nav ms-auto">

            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/platform">
                Platform
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/insights">
                Insights
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/contactUs">
                ContactUs
              </a>
            </li>

            {/* <li className="nav-item">
              <a className="nav-link contact-btn" href="#">
                Contact
              </a>
            </li> */}

          </ul>

        </div>

      </div>
    </nav>
  );
};

export default Navbar;