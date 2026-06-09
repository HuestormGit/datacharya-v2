import "./Advisory.scss";
import advisoryImg from "../../assets/images/advisory.png";

const Advisory = () => {
  return (
    <section className="advisory-section">
      <div className="container">
        <div className="row align-items-center">

          <div className="col-lg-6">
            <div className="advisory-image">
              <img
                src={advisoryImg}
                alt="Advisory Services"
                className="img-fluid"
              />
            </div>
          </div>

          <div className="col-lg-6">
            <div className="advisory-content">

              <span className="section-label">
                ADVISORY SERVICES
              </span>

              <h2>
                Advisory that
                <br />
                doesn't stop at the
                <br />
                <span>slide deck.</span>
              </h2>

              <p>
                Our advisory services integrate strategic guidance with
                hands-on execution. We don't just recommend—we implement,
                validate, and ensure your governance framework delivers
                measurable outcomes.
              </p>

              <ul>
                <li>Strategic governance design backed by implementation expertise</li>
                <li>Executive-level insights with operational depth</li>
                <li>Measurable outcomes tracked from day one</li>
              </ul>

              <a href="#contact" className="advisory-btn">
                Talk to Our Advisory Team →
              </a>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Advisory;