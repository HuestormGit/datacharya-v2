import "./Advisory.scss";
import advisoryImg from "../../assets/images/advisory.png";
import advisorysecImg from "../../assets/images/advisorysec.png";

const Advisory = ({ variant = "default" }) => {
  const isCxo = variant === "cxo";

  if (isCxo) {
    return (
      <section className="advisory-section advisory-section--cxo">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="advisory-image">
                <img
                  src={advisorysecImg}
                  alt="Executives reviewing governance strategy"
                  className="img-fluid"
                />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="advisory-content">
                <h2 className="H160">
                  Advisory
                  <br />
                  Transformed
                  <br />
                  Into Executable
                  <br />
                  Governance
                </h2>

                <p className="paragraph18px">
                  In today's dynamic enterprise landscape, CXOs need more than
                  advisory decks and disconnected technology solutions. They need
                  governance that can actually execute. Pure advisory has a
                  structural weakness: when execution fails, the strategy fails
                  with it.
                </p>

                <p className="paragraph18px">
                  Datacharya bridges this gap by combining governance advisory,
                  platform execution and continuous assurance into one operational
                  model. We help enterprises leverage IT, AI and shared services to
                  optimize controls, improve visibility, bridge process gaps and
                  drive measurable business outcomes.
                </p>

                <p className="paragraph18px">
                  This is not traditional consulting. It is advisory transformed
                  into executable governance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

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

              <p className="paragraph18px">
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
