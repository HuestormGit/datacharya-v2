import "./Footer.scss";
import logo from "../../assets/images/logo.png";

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
              <li>Smriti</li>
              <li>Sutra</li>
              <li>Shruti</li>
              <li>Samyog</li>
              <li>Samvad</li>
            </ul>
          </div>

          <div className="col-lg-3 Company">
            <h5>Company</h5>

            <ul>
              <li>About</li>
              <li>Platforms</li>
              <li>Insights</li>
            </ul>
          </div>

          <div className="col-lg-3 Resources">
            <h5>Resources</h5>
            <ul>
              <li>About</li>
            </ul>

            <p>info@datacharya.in</p>
          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;