import "./CTA.scss";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="cta-section">

      <div className="container text-center">
        <div className="row">

        <h2 className="H160">
          Ready to close the gap between your systems and their value?
        </h2>

        <p>
          Start with a 30-minute diagnostic conversation. No commitment required.
        </p>



        <div className="buttons">
          <Link className="primary-btn myButton" to="/contactUs">
          <i class="fa-regular fa-envelope"></i>
            Request Consultation
          </Link>

          <Link className="secondary-btn myButton" to="/advisory">
            Download Capability Overview
            <i class="fa-solid fa-download"></i>
          </Link>
        </div>
        </div>

      </div>

    </section>
  );
};

export default CTA;
