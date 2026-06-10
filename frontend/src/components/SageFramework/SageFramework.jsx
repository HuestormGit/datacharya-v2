import "./SageFramework.scss";
import senseIcon from "../../assets/images/sense-icon.png";
// import alignIcon from "../../assets/images/align-icon.png";
// import governIcon from "../../assets/images/govern-icon.png";

const defaultSteps = [
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

const approachSteps = [
  {
    iconLabel: "S",
    title: "SENSE",
    subtitle: "Advisory diagnosis",
    description:
      "We begin by capturing the truth of the organisation. This involves deep-dive data discovery and sensing the cultural pulse. We identify the hidden silos and friction points that traditional audits miss.",
    outcome:
      "Identify SAP blueprint gaps, ITGC weaknesses, HR control gaps, or DQ readiness issues.",
  },
  {
    iconLabel: "A",
    title: "ALIGN",
    subtitle: "Framework design",
    description:
      "Inspired by the concept of Yoga, alignment brings together your people, processes, and systems. We ensure that your data architecture supports your leadership's vision and that your culture is ready for the technical shifts ahead.",
    outcome:
      "Convert policy intent into SAP-aligned controls, ownership, workflows, and evidence requirements.",
  },
  {
    iconLabel: "G",
    title: "GOVERN",
    subtitle: "Platform execution",
    description:
      "Governance isn't just about compliance; it is about flow. We build the Digital Nervous System of your company, establishing clear data protocols and behaviour guardrails that ensure your systems remain scalable and secure.",
    outcome:
      "Execute approvals, exceptions, control checks, and evidence collection through platform workflows.",
  },
  {
    iconLabel: "E",
    title: "ELEVATE",
    subtitle: "Continuous assurance",
    description:
      "With a stable foundation in place, we move toward high-performance outcomes. Whether it is AI adoption or cost-major synergy, we elevate the organisation into a state of AI Readiness and peak leadership alignment.",
    outcome:
      "Track ITGC closure, audit readiness, ROI realization, and control effectiveness continuously.",
  },
];

const SageFramework = ({ variant = "default" }) => {
  const isApproach = variant === "approach";
  const steps = isApproach ? approachSteps : defaultSteps;

  if (isApproach) {
    return (
      <section className="sage-section sage-section--approach">
        <div className="container">
          <div className="approach-sage-intro">
            <h2 className="H240px">
              SAGE<small>TM</small>
              <br />
              philosophy
            </h2>
            <p className="paragraph16">
              The SAGE (Sense. Align. Govern. Elevate.) Framework gives enterprises
              a structured path to operationalize governance, from identifying
              control and process gaps to executing governance workflows, enabling
              assurance and continuously improving organizational trust and
              accountability.
            </p>
          </div>

          <div className="sage-grid">
            {steps.map((step, index) => (
              <article className="sage-card" key={step.title}>
                <div className="icon-box" aria-hidden="true">
                  {step.iconLabel}
                </div>
                <h3 className="H240px">{step.title}</h3>
                <h5 className="paragraph18px">{step.subtitle}</h5>
                <p className="description Paragrapha16">{step.description}</p>
                <div className="divider"></div>
                <p className="outcome">{step.outcome}</p>
                {index !== steps.length - 1 && (
                  <span className="connector" aria-hidden="true">
                    &rarr;
                  </span>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>
    );
  }

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
