import "./Footer.scss";
import logo from "../../assets/images/logo.png";

import { NavLink, useLocation } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="container-1680">

        <div className="row">

          <div className="col-lg-3 widget1">
            <div className="footerlogo"><img src={logo} alt="Datacharya" /></div>

            <p className="company-info">
              Enterprise governance and assurance that delivers measurable outcomes.
            </p>
          </div>

          <div className="col-lg-3 Capabilities">
            <h5 className="paragraph16_24_600">Capabilities</h5>

            <ul>
              <li>
                <NavLink
                to="/approach"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >Smriti</NavLink></li>
              <li>
                <NavLink
                to="/approach"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >Sutra</NavLink></li>
              <li>
                <NavLink
                to="/approach"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >Shruti</NavLink></li>
              <li>
                <NavLink
                to="/approach"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >Samyog</NavLink></li>
              <li>
                <NavLink
                to="/approach"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >Samvad</NavLink></li>
            </ul>
          </div>

          <div className="col-lg-3 Company">
            <h5>Company</h5>

            <ul>
              <li><NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                About Us
              </NavLink></li>
              
              <li><NavLink
                to="/platform"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Platforms
              </NavLink></li>
              <li><NavLink
                to="/advisory"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                CXO Advisory
              </NavLink></li>
            </ul>
          </div>

          <div className="col-lg-3 Resources">
            <h5>Resources</h5>
            <ul>
              <li>
                <NavLink
                to="/insights"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }>
                Insights</NavLink>
              </li>
              <li>
                <NavLink
                to="/contactUs"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }>Contact</NavLink>
              </li>
            </ul>

            <p>info@datacharya.in</p>
          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;