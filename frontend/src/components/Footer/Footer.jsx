import "./Footer.scss";
import logo from "../../assets/images/footer-logo.png";

import { NavLink, useLocation } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="container">

        <div className="row sec1">

          <div className="col-lg-3 col-md-6 col-sm-12 widget1">
            <div className="footerlogo">
              <NavLink className="navbar-brand" to="/">
                <img src={logo} alt="Datacharya" />
              </NavLink>
            </div>

            <p className="company-info">
              Enterprise governance and assurance that delivers measurable outcomes.
            </p>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-12 Capabilities">
            <h5>Pillars</h5>
            {/* <h5 className="paragraph16_24_600">Pillars</h5> */}


            <ul>
              <li>
                <NavLink
                  to="/approach?tab=smriti"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  Smriti
                </NavLink>
              </li>

              {/* <li>
                <NavLink
                  to="/approach?tab=smriti"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  Sutra
                </NavLink>
              </li> */}

              <li>
                <NavLink
                  to="/approach?tab=shruti"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  Shruti
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/approach?tab=samyog"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  Samyog
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/approach?tab=samvad"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  Samvad
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-12 Company">
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

          <div className="col-lg-3 col-md-6 col-sm-12 Resources">
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

            <p><a href="mailto:balaji.aravamuthan@datacharya.ai">balaji.aravamuthan@datacharya.ai</a></p>
          </div>

        </div>

        <div className="row">
          <div className="col-12 text-center Copyright">
            <p>Copyright © 2026 Datacharya</p>
          </div>
          
        </div>

      </div>

    </footer>
  );
};

export default Footer;