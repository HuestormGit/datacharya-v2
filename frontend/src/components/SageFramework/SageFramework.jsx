import "./SageFramework.scss";
import sense  from "../../assets/images/sense-icon.png";
import ALIGN  from "../../assets/images/ALIGN.png";
import GOVERN  from "../../assets/images/GOVERN.png";

const defaultSteps = [
  {
    icon: ALIGN,
    title: "SENSE",
    subtitle: "Advisory diagnosis",
    description:
      "Advisory Outcome Diagnostic assessment report + governance opportunity map",
    outcome:
      "Platform Outcome Control inventory baseline + risk visibility dashboard",
  },
  {
    icon: ALIGN,
    title: "ALIGN",
    subtitle: "Framework design",
    description:
      "Advisory Outcome Control, framework blueprint + ownership model",
    outcome:
      "Platform Outcome Configured SMRITI governance packs + SUTRA blueprint structure",
  },
  {
    icon: GOVERN,
    title: "GOVERN",
    subtitle: "Platform execution",
    description:
      "Advisory Outcome Governance operating model + implementation roadmap",
    outcome:
      "Platform Outcome Live workflows + automated evidence capture + measurable controls",
  },
  {
    icon: GOVERN,
    title: "ELEVATE",
    subtitle: "Continuous assurance",
    description:
      "Advisory Outcome Performance insights + governance optimisation recommendations",
    outcome:
      "Platform Outcome Board-ready dashboards + assurance metrics + monitoring systems",
  },
];

const StepIcon = ({ type }) => {
  if (type === "sense") {
    return (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <path d="M3.5 16s4.5-7 12.5-7 12.5 7 12.5 7-4.5 7-12.5 7S3.5 16 3.5 16Z" />
        <circle cx="16" cy="16" r="4.5" />
        <circle cx="16" cy="16" r="1.4" />
      </svg>
    );
  }

  if (type === "align") {
    return (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <circle cx="16" cy="16" r="4.5" />
        <circle cx="16" cy="4.5" r="2" />
        <circle cx="26" cy="10" r="2" />
        <circle cx="26" cy="22" r="2" />
        <circle cx="16" cy="27.5" r="2" />
        <circle cx="6" cy="22" r="2" />
        <circle cx="6" cy="10" r="2" />
        <path d="M16 6.5v5M24.2 11l-4.3 2.5M24.2 21l-4.3-2.5M16 25.5v-5M7.8 21l4.3-2.5M7.8 11l4.3 2.5" />
      </svg>
    );
  }

  if (type === "govern") {
    return (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <path d="M16 3.5 26 7v7.8c0 6.1-4 10.9-10 13.7-6-2.8-10-7.6-10-13.7V7l10-3.5Z" />
        <rect x="11" y="9" width="10" height="13" rx="1.5" />
        <path d="M13.5 12.5h5M13.5 15.5h5M13.5 18.5h3.5" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <circle cx="16" cy="16" r="12" />
      <path d="m9 20 5-5 4 3 6-7" />
      <path d="M19.5 11H24v4.5" />
    </svg>
  );
};

const approachSteps = [
  {
    iconLabel: "S",
    title: "SENSE",
    img: sense,
    subtitle: "Advisory diagnosis",
    description:
      "We begin by capturing the truth of the organisation. This involves deep-dive data discovery and sensing the cultural pulse. We identify the hidden silos and friction points that traditional audits miss.",
    outcome:
      "Identify SAP blueprint gaps, ITGC weaknesses, HR control gaps, or DQ readiness issues.",
  },
  {
    iconLabel: "A",
    title: "ALIGN",
    img: sense,
    subtitle: "Framework design",
    description:
      "Inspired by the concept of Yoga, alignment brings together your people, processes, and systems. We ensure that your data architecture supports your leadership's vision and that your culture is ready for the technical shifts ahead.",
    outcome:
      "Convert policy intent into SAP-aligned controls, ownership, workflows, and evidence requirements.",
  },
  {
    iconLabel: "G",
    title: "GOVERN",
    img: sense,
    subtitle: "Platform execution",
    description:
      "Governance isn't just about compliance; it is about flow. We build the Digital Nervous System of your company, establishing clear data protocols and behaviour guardrails that ensure your systems remain scalable and secure.",
    outcome:
      "Execute approvals, exceptions, control checks, and evidence collection through platform workflows.",
  },
  {
    iconLabel: "E",
    title: "ELEVATE",
    img: sense,
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
        <div className="container approach-sage-box">
          <div className="approach-sage-intro">
            <h2 className="H240px">
              SAGE<small>TM</small>
              <br />
              philosophy
            </h2>
            <p className="paragraph18px">
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
                  {/* {step.iconLabel} */}
                  <img src={step.img} alt={step.title} />
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

              <div className="sage-card-top">
                <img src={step.icon} alt={step.title} />
                {/* ICON */}
                {/* <div className="icon-box1">
                  <StepIcon type={step.icon} />
                   
                </div> */}

                <h3 className="H240px">{step.title}</h3>

                <p className="paragraph18px">{step.subtitle}</p>


              </div>

              <div className="sage-card-bottom">
                <p className="paragraph16">
                  Advisory Outcome
                </p>
                <p className="paragraph16 description">
                {step.description}
                </p>

                <div className="divider"></div>

                <p className="paragraph16">
                  Platform Outcome
                </p>
                <p className="paragraph16 description">
                {step.outcome}
                </p>

                
              </div>

              

              {/* CONNECTOR */}
              {index !== steps.length - 1 && (
                <div className="connector">
                  <i className="fa-solid fa-arrow-right"></i>
                </div>
              )}

              {/* CONTENT */}
              

              

             

            </div>

          ))}

        </div>

        {/* CTA BOX */}
        <div className="sage-cta">

          <div>

            <h3 className="H160">
              See SAGE in Action
            </h3>

            <p className="paragraph16">
              Learn how enterprises used this methodology to close critical governance gaps and extract maximum value from technology investments.            
            </p>

          </div>

          <button className="myButton">
            View Case Studies
          </button>

        </div>

      </div>

    </section>
  );
};

export default SageFramework;
