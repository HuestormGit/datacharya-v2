import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="container">

        <div className="row">

          <div className="col-lg-4">
            <h3>DATACHARYA</h3>

            <p>
              Enterprise governance and assurance transformation.
            </p>
          </div>

          <div className="col-lg-4">
            <h5>Quick Links</h5>

            <ul>
              <li>About</li>
              <li>Platforms</li>
              <li>Insights</li>
            </ul>
          </div>

          <div className="col-lg-4">
            <h5>Contact</h5>

            <p>info@datacharya.in</p>
          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;