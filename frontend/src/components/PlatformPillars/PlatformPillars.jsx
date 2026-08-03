import "./PlatformPillars.scss";
import { Link } from "react-router-dom";
import C from "../../assets/images/CHETAK.png";
import D from "../../assets/images/CHATURVIMA.png";
import DA from "../../assets/images/DATARAKSHA.png";
import DAT from "../../assets/images/DATANEETI.png";
import T from "../../assets/images/TRUSTLINK.png";
import AI from "../../assets/images/AGENTICAI.png";
import R from "../../assets/images/ROIDASHBOARD.png";
import SAMYOG_hp from "../../assets/images/SAMYOG-hp.png";
import SHRUTI_hp from "../../assets/images/SHRUTI-hp.png";
import SMRITI_hp from "../../assets/images/SMRITI-hp.png";
import SAMVAD_hp from "../../assets/images/SAMVAD-hp.png";



const platformData = [
  {
    id: 1,
    title: "SMRITI",
    img: SMRITI_hp,
    subtitle: "Governance Frameworks",
    description:
      "SMRITI converts governance knowledge into working enterprise discipline—policies, procedures, controls, ownership, evidence and execution-ready frameworks.",
      // "Advisory defines the governance spine; platform converts it into policies, procedures, controls, ownership, evidence and exceptions.",
    tags: ["ERP Pack", "IFC Pack", "IPO Pack", "EXE Pack", "RASE Pack"],
    Featuredcapabilitytitle :" Featured capability",
    Featuredcapabilitycontent : "SUTRA — SAP blueprinting and execution governance.",
    // Featuredcapabilitycontent : "SUTRA - SAP Blueprinting & KRIYA Execution Governance","Featured SMRITI capability: SUTRA—SAP blueprinting and execution governance.",
    buttonText: "Explore the Platforms",
  },
  {
    id: 2,
    title: "SHRUTI",
    img: SHRUTI_hp,
    subtitle: "Evidence & Assurance Intelligence",
    description:
      // "Advisory identifies risk and value leakage; platform monitors controls, ITGC, DPDP, audit, ROI and exceptions continuously.",
      "AI-assisted continuous audit with evidence-led review, exception prioritisation and accountable follow-through.",
    tags: [
      "ITGC Assurance",
      "Internal Audit",
      "DPDP",
      "ROI Engine",
      "Risk Intelligence",
    ],
    buttonText: "Explore the Platforms",
  },
  {
    id: 3,
    title: "SAMYOG",
    img: SAMYOG_hp,
    subtitle: "Trust & Organizational Intelligence",
    description:
      "Advisory interprets credibility, culture and leadership signals; platform validates professional trust and organizational health.",
    tags: ["TrustLink B2C", "TrustLink B2B"],
    buttonText: "Explore the Platforms",
  },
  {
    id: 4,
    title: "SAMVAD",
    img: SAMVAD_hp,
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
    buttonText: "Explore the Platforms",
  },
];

const ecosystemData = [
  {
    id: 1,
    icon: "C",
    img: C,
    title: "CHETAK",
    subtitle: "SAP Due Diligence & AI Audit",
    highlight:
      "Replace manual checklists with empirical data to verify technical integrity during high-stakes transitions.",
    description:
      "Chetak is an AI-driven platform that performs deep-level scans of SAP landscapes to identify hidden technical debt, cybersecurity vulnerabilities, and licensing risks. By automating process discovery, it surfaces shadow workflows and compliance gaps that traditional audits miss. This objective assessment ensures S/4HANA readiness and compresses due diligence timelines, allowing CFOs and investors to justify enterprise valuations with accuracy and secure post-merger integration with absolute confidence.",
  },
  {
    id: 2,
    icon: "4D",
    img: D,
    title: "CHATURVIMA",
    subtitle: "4D Enterprise Transformation",
    highlight:
      "A multi-dimensional framework to align organizational health with strategic intent.",
    description:
      "Chaturvima evaluates your enterprise across four critical levels: employee, leadership, department, and company. By bridging the perception gaps between executive vision and ground-level execution, it identifies hidden cultural fractures that cause strategic drag. This diagnostic provides decision-makers with the empirical insights needed to synchronize mission and execution.",
  },
  {
    id: 3,
    icon: "D",
    img: DA,
    title: "DATARAKSHA",
    subtitle: "DPDP Readiness & Consent Governance",
    highlight:
      "Automated privacy governance and industry-specific compliance scoring.",
    description:
      "Dataraksha is designed to navigate the complexities of the Digital Personal Data Protection Act through automated consent management and rigorous control scoring. It provides enterprises with a real-time privacy score tailored to their specific industry, highlighting regulatory gaps before they become liabilities.",
  },
  {
    id: 4,
    icon: "D",
    img: DAT,
    title: "DATANEETI",
    subtitle: "Verifiable Digital Trust",
    highlight:
      "Trustlink serves as a digital trust layer, enabling enterprises to prove the authenticity and compliance of data, partners, and assets in real-time.",
    description:
      "Using digital passports and verifiable credentials, it delivers the transparency and traceability required to secure complex supply chains and partner networks. This platform transforms blind trust into verifiable assurance.",
  },
  {
    id: 5,
    icon: "T",
    img: T,
    title: "TRUSTLINK",
    subtitle: "Responsible Decision Governance",
    highlight:
      "Ensuring AI and automated decisions are ethical, explainable, and auditable.",
    description:
      "Trustlink is a governance platform built to oversee the brain of your enterprise: its decision systems. It enforces strict decision rules and accountability frameworks so AI-driven outcomes are not just efficient, but ethically aligned and fully traceable.",
  },
  {
    id: 6,
    icon: "AI",
    img: AI,
    title: "AGENTIC AI",
    subtitle: "Autonomous Governance Intelligence",
    highlight:
      "An AI-driven governance layer that continuously monitors enterprise workflows.",
    description:
      "It identifies control gaps, flags anomalies and recommends corrective actions in real time. Built to help organizations move from reactive compliance to intelligent, continuous governance execution.",
  },
  {
    id: 7,
    icon: "R",
    img: R,
    title: "ROI DASHBOARD",
    subtitle: "Governance Impact & Value Visibility",
    highlight:
      "A unified dashboard that translates governance activities into measurable business outcomes.",
    description:
      "From risk reduction and control efficiency to compliance readiness and operational performance. Designed for leadership teams that need governance visibility beyond static reporting.",
  },
];

const PlatformPillars = ({ variant = "default" }) => {
  if (variant === "ecosystem") {
    return (
      <section className="platform-ecosystem">
        <div className="container-fluid">
          <div className="platform-ecosystem_grid">
            {ecosystemData.map((item) => (
              <article className="ecosystem-card" key={item.id}>
                <div className="cardbody">
                  <div className="ecosystem-card_title">
                    <img src={item.img} alt={item.title} />
                    {/* <span aria-hidden="true">{item.icon}</span>
                    <h2>{item.title}</h2> */}
                  </div>
                  <h3 className="h30px">{item.subtitle}</h3>
                  <p className="paragraph18px"><strong>{item.highlight}</strong></p>
                  <p className="paragraph18px">{item.description}</p>

                </div>
                
                
                <a href="/contactUs" className="myButton">Take a trial <i className="fa-solid fa-arrow-right"></i></a>
              </article>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="platform-section">
      <div className="container">

        {/* SECTION TITLE */}
        <div className="section-title">
          <span className="paragraph18px">
            THE DATACHARYA FRAMEWORK
          </span>

          <h2 className="H160">
           Four Platform Families. One Operating Logic.
          </h2>

          <p className="paragraph18px">
            A structured system that unifies governance, execution, and assurance across your enterprise
          </p>
        </div>

       

      </div>
      <div className="container-1680">
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
                     <img src={item.img} alt={item.title} />
                    {/* <span aria-hidden="true">{item.title.slice(0, 1)}</span> */}
                  </div>

                  <div>
                    <h3 className="H240px">{item.title}</h3>

                    <h5 className="paragraph18px">{item.subtitle}</h5>
                  </div>

                </div>

                {/* DESCRIPTION */}
                <p className="paragraph18px">
                  {item.description}
                </p>

                {/* TAGS */}
                <div className="tags">

                  {item.tags.map((tag, index) => (

                    <span key={index} className="paragraph16">
                      {tag}
                    </span>

                  ))}

                </div>

                <div className="card-bottom">

                  <div className="featured-capability">

                    {item.Featuredcapabilitytitle && (
                      <span className="featured-title">
                        {item.Featuredcapabilitytitle}
                      </span>
                    )}

                    {item.Featuredcapabilitycontent && (
                      <p className="featured-content paragraph18px">
                        {item.Featuredcapabilitycontent}
                      </p>
                    )}

                  </div>

                   <Link className="platform-link myButton" to="/approach">
                            {item.buttonText} <i className="fa-solid fa-arrow-right"></i>

                        </Link>

                  {/* <a className="platform-link myButton" href="/approach">
                    {item.buttonText} <i className="fa-solid fa-arrow-right"></i>

                  </a> */}

                </div>
              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default PlatformPillars;
