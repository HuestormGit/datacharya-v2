import "./Framework.scss";

const Framework = () => {
  return (

    <section className="framework-section">

      <div className="container">

        <div className="framework-title">

          <span>METHODOLOGY</span>

          <h2>
            A structured system — not a set
            of unrelated services.
          </h2>

        </div>

        <div className="framework-wrapper">

          {/* LEFT SIDE */}

          <div className="framework-left">

            <div className="framework-card">

              <h3>SMRITI</h3>

              <p>
                Long-term business memory.
              </p>

            </div>

            <div className="framework-card">

              <h3>SUTRA</h3>

              <p>
                Governance framework.
              </p>

            </div>

            <div className="framework-card">

              <h3>SHRUTI</h3>

              <p>
                Knowledge intelligence system.
              </p>

            </div>

          </div>

          {/* RIGHT SIDE */}

          <div className="framework-right">

            <div className="framework-circle">

              <h3>SAMYOG</h3>

              <p>
                Enterprise integration ecosystem
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Framework;