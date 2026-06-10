import "./ApproachSage.scss";

const sageSteps = [
  {
    title: "SENSE",
    subtitle: "Advisory diagnosis",
    icon: "◎",
    description:
      "We begin by capturing the truth of the organisation. This involves deep-dive data discovery and sensing the cultural pulse. We identify the hidden silos and friction points that traditional audits miss.",
    outcome:
      "Identify SAP blueprint gaps, ITGC weaknesses, HR control gaps, or DQ readiness issues.",
  },
  {
    title: "ALIGN",
    subtitle: "Framework design",
    icon: "⌘",
    description:
      "Inspired by the concept of Yoga, alignment brings together your people, processes, and systems. We ensure that your data architecture supports your leadership's vision and that your culture is ready for the technical shifts ahead.",
    outcome:
      "Convert policy intent into SAP-aligned controls, ownership, workflows, and evidence requirements.",
  },
  {
    title: "GOVERN",
    subtitle: "Platform execution",
    icon: "◉",
    description:
      "Governance isn't just about compliance; it is about flow. We build the Digital Nervous System of your company, establishing clear data protocols and behaviour guardrails that ensure your systems remain scalable and secure.",
    outcome:
      "Execute approvals, exceptions, control checks, and evidence collection through platform workflows.",
  },
  {
    title: "ELEVATE",
    subtitle: "Continuous assurance",
    icon: "◇",
    description:
      "With a stable foundation in place, we move toward high-performance outcomes. Whether it is AI adoption or cost-major synergy, we elevate the organisation into a state of AI Readiness and peak leadership alignment.",
    outcome:
      "Track ITGC closure, audit readiness, ROI realization, and control effectiveness continuously.",
  },
];

const ApproachSage = () => {
  return (
    <section className="approach-sage">
      <div className="container">
        <div className="approach-sage__intro">
          <h2>SAGE<small>™</small><br />philosophy</h2>
          <p className="paragraph16">
            The SAGE (Sense. Align. Govern. Elevate.) Framework gives enterprises
            a structured path to operationalize governance, from identifying
            control and process gaps to executing governance workflows, enabling
            assurance and continuously improving organizational trust and
            accountability.
          </p>
        </div>

        <div className="approach-sage__grid">
          {sageSteps.map((step, index) => (
            <article className="approach-sage__card" key={step.title}>
              <div className="approach-sage__icon" aria-hidden="true">
                {step.icon}
              </div>
              <h3>{step.title}</h3>
              <h4>{step.subtitle}</h4>
              <p>{step.description}</p>
              <div className="approach-sage__divider"></div>
              <p className="approach-sage__outcome">{step.outcome}</p>
              {index < sageSteps.length - 1 && (
                <span className="approach-sage__connector" aria-hidden="true">→</span>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApproachSage;
