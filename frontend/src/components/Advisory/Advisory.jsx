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
                  Transformed
                  Into Executable
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
    <section className="advisory-section-home">
      <div className="container">
        <div className="row align-content-between">

          <div className="col-lg-6 col-md-12">
            <div className="advisory-image">
              <img
                src={advisoryImg}
                alt="Advisory Services"
                className="img-fluid"
              />
            </div>
          </div>

          <div className="col-lg-6 col-d-12">
            <div className="advisory-content">
              <p className="paragraph18px label">
                ADVISORY SERVICES
              </p>

              <h2 className="H160">
                Advisory that
                <br />
                doesn't stop at the
                <br />
                <span>slide deck.</span>
              </h2>

              {/* <span className="section-label">
                ADVISORY SERVICES
              </span>

              <h2 className="H160">
                Advisory that
                <br />
                doesn't stop at the
                <br />
                <span>slide deck.</span>
              </h2> */}

              <p className="paragraph18px">
                Our advisory services integrate strategic guidance with
                hands-on execution. We don't just recommend—we implement,
                validate, and ensure your governance framework delivers
                measurable outcomes.
              </p>

              <div className="mylist">
                <div className="paragraph16">
                  <i class="fa-regular fa-circle-check"></i>
                  Strategic governance design backed by implementation expertise
                </div>
                 <div className="paragraph16"> 
                  <i class="fa-regular fa-circle-check"></i>
                  Executive-level insights with operational depth
                </div>
                 <div className="paragraph16"> 
                  <i class="fa-regular fa-circle-check"></i>
                  Measurable outcomes tracked from day one
                </div>
              </div>

              {/* <ul>
                <li>Strategic governance design backed by implementation expertise</li>
                <li>Executive-level insights with operational depth</li>
                <li>Measurable outcomes tracked from day one</li>
              </ul> */}

              <a href="#contact" className="advisory-btn myButton">
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
