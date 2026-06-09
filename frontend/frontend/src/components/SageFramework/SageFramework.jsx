import "./SageFramework.scss";
import senseIcon from "../../assets/images/sense-icon.png";
// import alignIcon from "../../assets/images/align-icon.png";
// import governIcon from "../../assets/images/govern-icon.png";

const steps = [
  {
    icon: senseIcon,
    title: "SENSE",
    subtitle: "Advisory diagnosis",
    description:
      "Advisory Outcome Diagnostic assessment report + governance opportunity map",
    outcome:
      "Platform Outcome Control inventory baseline + risk visibility dashboard",
  },
  {
    icon: "/images/align-icon.png",
    title: "ALIGN",
    subtitle: "Framework design",
    description:
      "Advisory Outcome Control, framework blueprint + ownership model",
    outcome:
      "Platform Outcome Configured SMRITI governance packs + SUTRA blueprint structure",
  },
  {
    icon: "/images/govern-icon.png",
    title: "GOVERN",
    subtitle: "Platform execution",
    description:
      "Advisory Outcome Governance operating model + implementation roadmap",
    outcome:
      "Platform Outcome Live workflows + automated evidence capture + measurable controls",
  },
  {
    icon: "/images/elevate-icon.png",
    title: "ELEVATE",
    subtitle: "Continuous assurance",
    description:
      "Advisory Outcome Performance insights + governance optimisation recommendations",
    outcome:
      "Platform Outcome Board-ready dashboards + assurance metrics + monitoring systems",
  },
];

const SageFramework = () => {
  return (
    <section className="sage-section">

      <div className="container">

        {/* TITLE */}
        <div className="section-title">

          <span className="top-title paragraph18px">
            OUR METHODOLOGY
          </span>

          <h2 className="H160">
            The <span>SAGE</span> Framework
          </h2>

          <p className="paragraph18px">
            Sense — Align — Govern — Elevate:
            A proven four-phase approach that transforms governance
            from compliance burden to strategic advantage
          </p>

        </div>

        {/* CARDS */}
        <div className="sage-grid">

          {steps.map((step, index) => (

            <div className="sage-card" key={index}>

              {/* ICON */}
              <div className="icon-box">

                <img
                  src={step.icon}
                  alt={step.title}
                />

              </div>

              {/* CONNECTOR */}
              {index !== steps.length - 1 && (
                <div className="connector"></div>
              )}

              {/* CONTENT */}
              <h3>{step.title}</h3>

              <h5>{step.subtitle}</h5>

              <p className="description">
                {step.description}
              </p>

              <div className="divider"></div>

              <small>
                Platform Outcome
              </small>

              <p className="outcome">
                {step.outcome}
              </p>

            </div>

          ))}

        </div>

        {/* CTA BOX */}
        <div className="sage-cta">

          <div>

            <h3>
              See SAGE in Action
            </h3>

            <p>
              Learn how enterprises used this methodology to close critical governance gaps and extract maximum value from technology investments.
            </p>

          </div>

          <button>
            View Case Studies
          </button>

        </div>

      </div>

    </section>
  );
};

export default SageFramework;