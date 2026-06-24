import "./Navbar.scss";
import logo from "../../assets/images/logo.png";

import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
  // console.log("Scroll Y:", window.scrollY);

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
      className={`navbar navbar-expand-lg custom-navbar ${
        isHome && !sticky ? "home-navbar" : "inner-navbar"
      } ${sticky ? "sticky-nav" : ""}`}
    >
      <div className="container">
        {/* LOGO */}
        <NavLink className="navbar-brand" to="/">
          <img src={logo} alt="Datacharya" />
        </NavLink>

        {/* TOGGLE */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* MENU */}
        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                About Us
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/approach"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Our Approach
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/advisory"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                CXO Advisory
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/platform"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Platforms
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/insights"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Insights
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/contactUs"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;