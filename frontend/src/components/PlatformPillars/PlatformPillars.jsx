import "./PlatformPillars.scss";

const platformData = [
  {
    id: 1,
    title: "SMRITI",
    subtitle: "Governance Frameworks",
    description:
      "Advisory defines the governance spine; platform converts it into policies, procedures, controls, ownership, evidence and exceptions.",
    tags: ["ERP Pack", "IFC Pack", "IPO Pack", "EXE Pack", "RASE Pack"],
    buttonText: "Read more",
  },
  {
    id: 2,
    title: "SHRUTI",
    subtitle: "Evidence & Assurance Intelligence",
    description:
      "Advisory identifies risk and value leakage; platform monitors controls, ITGC, DPDP, audit, ROI and exceptions continuously.",
    tags: [
      "ITGC Assurance",
      "Internal Audit",
      "DPDP",
      "ROI Engine",
      "Risk Intelligence",
    ],
    buttonText: "Read more",
  },
  {
    id: 3,
    title: "SAMYOG",
    subtitle: "Trust & Organizational Intelligence",
    description:
      "Advisory interprets credibility, culture and leadership signals; platform validates professional trust and organizational health.",
    tags: ["TrustLink B2C", "TrustLink B2B"],
    buttonText: "Read more",
  },
  {
    id: 4,
    title: "SAMVAD",
    subtitle: "Enterprise Interaction Layer",
    description:
      "Advisory turns decisions into operating rhythm; platform manages workflows, collaboration, utilities and action tracking.",
    tags: [
      "Enterprise workflows",
      "CXO cockpit",
      "Collaboration",
      "Utilities",
      "Action registers",
    ],
    buttonText: "Read more",
  },
];

const PlatformPillars = () => {
  return (
    <section className="platform-section">
      <div className="container">

        {/* SECTION TITLE */}
        <div className="section-title">
          <span className="paragraph18px">
            THE DATACHARYA FRAMEWORK
          </span>

          <h2 className="H160">
            Four Platform Pillars
          </h2>

          <p className="paragraph18px">
            A structured system that unifies governance,
            execution, and assurance across your enterprise
          </p>
        </div>

        {/* PLATFORM GRID */}
        <div className="row">

          {platformData.map((item) => (

            <div
              className="col-lg-6 col-md-6 mb-4"
              key={item.id}
            >

              <div className="platform-card">

                {/* ICON + TITLE */}
                <div className="card-top">

                  <div className="icon-box">
                    <img
                      src="/images/platform-icon.png"
                      alt=""
                    />
                  </div>

                  <div>
                    <h3>{item.title}</h3>

                    <h5>{item.subtitle}</h5>
                  </div>

                </div>

                {/* DESCRIPTION */}
                <p>
                  {item.description}
                </p>

                {/* TAGS */}
                <div className="tags">

                  {item.tags.map((tag, index) => (

                    <span key={index}>
                      {tag}
                    </span>

                  ))}

                </div>

                {/* BUTTON */}
                <button>
                  {item.buttonText}
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default PlatformPillars;