import "./Navbar.scss";

import logo from "../../assets/images/logo.png";

import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {

  const [sticky, setSticky] = useState(false);

  const location = useLocation();

  const isHome = location.pathname === "/";
  const isActive = (path) => location.pathname === path;

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
              <Link
                className={`nav-link ${isActive("/about") ? "active" : ""}`}
                to="/about"
                aria-current={isActive("/about") ? "page" : undefined}
              >
                About Us
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className={`nav-link ${isActive("/approach") ? "active" : ""}`}
                to="/approach"
                aria-current={isActive("/approach") ? "page" : undefined}
              >
                Our Approach
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/advisory">
                CXO Advisory
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className={`nav-link ${isActive("/platform") ? "active" : ""}`}
                to="/platform"
                aria-current={isActive("/platform") ? "page" : undefined}
              >
                Platforms
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className={`nav-link ${isActive("/insights") ? "active" : ""}`}
                to="/insights"
                aria-current={isActive("/insights") ? "page" : undefined}
              >
                Insights
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className={`nav-link ${isActive("/contactUs") ? "active" : ""}`}
                to="/contactUs"
                aria-current={isActive("/contactUs") ? "page" : undefined}
              >
                Contact
              </Link>
            </li>

          </ul>

        </div>

      </div>
    </nav>
  );
};

export default Navbar;
