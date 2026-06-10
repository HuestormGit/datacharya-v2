import { Link } from "react-router-dom";
import "./HeroSlider.scss";

const benefits = [
  ["Advisory + Execution", "Not advice alone, platforms that execute"],
  ["Evidence Over Opinion", "Continuous assurance, not periodic audits"],
  ["Living Governance", "In your systems, not in a folder"],
];

const HeroSlider = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-content">
          <p className="hero-eyebrow">ENTERPRISE GOVERNANCE & ASSURANCE</p>
          <h1>
            Most enterprise transformation fails not at the technology layer,
            but at the governance layer.
          </h1>
          <p className="hero-summary">
            Datacharya closes this gap by converting governance intent into
            executable systems, evidence-backed controls, and measurable
            enterprise outcomes.
          </p>

          <div className="hero-btns">
            <Link className="btn-dark" to="/approach">
              Explore Our Framework
            </Link>
            <Link className="btn-light" to="/insights">
              View Case Studies
            </Link>
          </div>

          <ul className="hero-benefits">
            {benefits.map(([title, description]) => (
              <li key={title}>
                <strong>{title}</strong>
                <span>{description}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;
