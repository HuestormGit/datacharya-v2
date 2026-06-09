import "./PlatformSection.scss";

const PlatformSection = () => {
  return (

    <section className="platform-section">

      <div className="container">

        <div className="section-title">

          <span>PLATFORMS</span>

          <h2>
            Your enterprise has the platforms.
            The question is whether they're working.
          </h2>

        </div>

        <div className="platform-grid">

          <div className="platform-card large">

            <h3>CRM</h3>

            <p>
              You have pipelines.
            </p>

            <button>See</button>

          </div>

          <div className="platform-card">

            <h3>AUDITS</h3>

            <p>
              You run annual audits.
            </p>

            <button>See</button>

          </div>

          <div className="platform-card">

            <h3>IMPLEMENTATION</h3>

            <p>
              You have SAP implemented.
            </p>

            <button>See</button>

          </div>

        </div>

      </div>

    </section>
  );
};

export default PlatformSection;