import "./HeroSlider.scss";

const HeroSlider = () => {
  return (
    <section className="hero-section">

      <div className="container">

        <div className="hero-content">
          <p className="paragraph18px blue">ENTERPRISE GOVERNANCE & ASSURANCE</p>

          <h1 className="H160">
            Most enterprise transformation fails not at the technology layer— but at the governance layer.
          </h1>

          <p>
            Datacharya closes this gap by converting governance intent into executable systems, evidence-backed controls, and measurable enterprise outcomes.
          </p>

          <div className="hero-btns">
            <button className="btn-dark">
              Explore Our Framework
            </button>

            <button className="btn-light">
              View Case Studies
            </button>
          </div>

          <div className="bulletpoint my-4">
            <ul className="horizontal-list sliderbulletpoint">
              <li className="horizontal-list-item">
                <span className="paragraph18px">Advisory + Execution</span><br></br>
                <span className="Paragrapha16">Not advice alone—platforms that execute</span>
              </li>
              <li className="horizontal-list-item">
                <span className="paragraph18px">Evidence Over Opinion</span><br></br>
                <span className="Paragrapha16">Continuous assurance, not periodic audits</span>
              </li>
              <li className="horizontal-list-item">
                <span className="paragraph18px">Living Governance</span><br></br>
                <span className="Paragrapha16">In your systems, not in a folder</span>
              </li>
            </ul>
          </div>

        </div>

      </div>

    </section>
  );
};

export default HeroSlider;