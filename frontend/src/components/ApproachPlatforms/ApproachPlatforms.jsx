import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./ApproachPlatforms.scss";
import SMRITISUTRA  from "../../assets/images/SMRITISUTRA.png";
import SHRUTI  from "../../assets/images/SHRUTI.png";
import SAMYOG  from "../../assets/images/SAMYOG.png";
import SAMVAD  from "../../assets/images/SAMVAD.png";
import orangeicon  from "../../assets/images/orange-arrow.png";
 
const packs = [
  {
    title: "ERP Pack",
    label: "Process Governance",
    audience: "CIO / SAP Program Leads",
    copy: "SAP and ERP process standards, linked to controls and exceptions. Outputs for implementation and operations.",
  },
  {
    title: "IFC Pack",
    label: "Internal Financial Controls",
    audience: "CFO / Finance Controller",
    copy: "Financial control frameworks for accuracy, reliability, and regulatory compliance. Linked to SAP process flows.",
  },
  {
    title: "IPO Pack",
    label: "Listing Readiness",
    audience: "CEO / Board / Company Secretary",
    copy: "Corporate governance frameworks for public market readiness, controls, disclosures, board processes.",
  },
  {
    title: "EXE Pack",
    label: "Operating Discipline",
    audience: "COO / Transformation Head",
    copy: "KPI governance, performance management frameworks, operating procedures linked to strategic intent.",
  },
  {
    title: "RASE Pack",
    label: "Risk, Audit, Strategy, ESG",
    audience: "CAC / Risk Officer / Board",
    copy: "Enterprise risk framework, audit governance, strategic planning controls, and ESG reporting governance.",
  },
];

// const platformItems = [
//   {
//     id: "smriti",
//     title: "SMRITI + SUTRA",
//     subtitle: "",
//     cardheading:"",
//     body:"",
//     Featuredhading:"",
//     Featuredpara:"",
    
//   },
//   {
//     id: "shruti",
//     title: "SHRUTI",
//     subtitle: "AI Assurance & Execution Engine",
//     cardheading:"Assurance that runs continuously — not retrospectively.",
//     body:"SHRUTI is Datacharya's assurance and intelligence platform — delivering continuous visibility across controls, audit, risk, compliance, ROI, and operational performance. Built for enterprises where leadership lacks real assurance, audit remains retrospective, and the return on ERP and digital investments is assumed rather than measured.",
//     Featuredhading:"PRAMAAN — Continuous Controls & Audit Intelligence",
//     Featuredpara:"Controls that are verified from system data — not assembled manually before an audit. PRAMAAN connects execution, control, and value into one continuous intelligence layer — giving leadership the signals they need to act, not reports they need to interpret.",
    
//   },
//   {
//     id: "samyog",
//     title: "SAMYOG",
//     subtitle: "Trust & Organizational Alignment",
//     cardheading:"Trust that is visible and measurable — not assumed until it becomes a risk.",
//     body:"SAMYOG is Datacharya's trust and behavioral intelligence platform — making individual credibility, behavioral patterns, and relationship dynamics visible, measurable, and strategically useful across the enterprise. Built for organizations where leadership credibility, cultural alignment, and relationship strength remain invisible until they surface as a reputational or operational risk.",
//     Featuredhading:"TRUSTLINK.GURU — Individual & Enterprise Trust Intelligence",
//     Featuredpara:"Trust scores built from real signals — not from CVs and unverified references. TrustLink.Guru builds structured trust profiles around people, roles, and relationships — connecting individual credibility to enterprise reputation and decision quality.",
    
//   },
//   {
//     id: "samvad",
//     title: "SAMVAD",
//     subtitle: "Enterprise Interaction & Collaboration",
//     cardheading:"Decisions that turn into action — not into meeting notes that go nowhere.",
//     body:"SAMVAD is Datacharya's enterprise interaction layer — converting advisory outcomes and leadership decisions into structured operating rhythm through workflows, collaboration, and action tracking. Built for enterprises where the gap between what leadership decides and what the organization executes is a consequence of how decisions are managed, not how often they are made.",
//     Featuredhading:"CXO COCKPIT — Decision-to-Execution Intelligence",
//     Featuredpara:"A single layer where advisory, decisions, and action registers come together. The CXO Cockpit gives leadership a structured environment to track decisions, manage workflows, and close the loop between strategic intent and operational delivery.",
    
//   },
// ];

const platformData = [
  {
    id: 1,
    slug: "smriti",
    title: "SMRITI + SUTRA",
    subtitle: "Enterprise Governance Framework & SAP Blueprint Design",
    headline:
      "Governance that lives in your systems — not in a SharePoint folder.",
    description:
      "Smriti is Datacharya's enterprise governance framework — a structured system that links policies to procedures, procedures to controls, and controls to verifiable evidence. Built for enterprises that already have governance documents but lack governance execution.",

    Featuredcapabilitytitle:
      "SUTRA - SAP Blueprinting & KRIYA Execution Governance",

    Featuredcapabilitycontent:
      "Sutra takes the governance standards defined in Smriti and converts them into structured, implementation-ready SAP blueprints — dramatically faster than the traditional approach, and built to survive the implementation, not just precede it.",

    features: [
      "Reconciled SAP implementations",
      "SAP-AAA migration blueprints",
      "Post-acquisition system alignment",
      "Remediation blueprints after failed implementations",
    ],
    icon: SMRITISUTRA,
    tone: "blue",
  },

  {
    id: 2,
    slug: "shruti",
    title: "SHRUTI",
    subtitle: "Evidence & Assurance Intelligence",
    headline:
      "Assurance that runs continuously — not retrospectively.",
    description:
      "SHRUTI is Datacharya's assurance and intelligence platform — delivering continuous visibility across controls, audit, risk, compliance, ROI, and operational performance. Built for enterprises where leadership lacks real assurance, audit remains retrospective, and the return on ERP and digital investments is assumed rather than measured.",

    Featuredcapabilitytitle:
      "PRAMAAN — Continuous Controls & Audit Intelligence",

    Featuredcapabilitycontent:
      "Controls that are verified from system data — not assembled manually before an audit. PRAMAAN connects execution, control, and value into one continuous intelligence layer — giving leadership the signals they need to act, not reports they need to interpret.",

    features: [
      "Continuous ITGC monitoring and controls evidence",
      "Agentic internal audit and ongoing operational review",
      "Compliance maturity tracking across risk and regulatory frameworks",
      "ERP and digital investment ROI — measured, not assumed",
    ],
    icon: SHRUTI,
    tone: "orange",
  },

  {
    id: 3,
    slug: "samyog",
    title: "SAMYOG",
    subtitle: "Trust & Organizational Intelligence",

    headline:
      "Trust that is visible and measurable — not assumed until it becomes a risk.",

    description:
      "SAMYOG is Datacharya's trust and behavioral intelligence platform — making individual credibility, behavioral patterns, and relationship dynamics visible, measurable, and strategically useful across the enterprise.",

    Featuredcapabilitytitle:
      "TRUSTLINK.GURU — Individual & Enterprise Trust Intelligence",

    Featuredcapabilitycontent:
      "Trust scores built from real signals — not from CVs and unverified references.",

    features: [
      "Individual trust scoring across roles, projects, and relationships",
      "Behavioral and cultural intelligence across teams and institutions via Chaturvima",
      "Enterprise credibility mapping — from individual signals to organizational gravitas",
      "Human and relational intelligence that strengthens leadership decisions",
    ],
    icon: SAMYOG,
    tone: "blue",
  },

  {
    id: 4,
    slug: "samvad",
    title: "SAMVAD",
    subtitle: "Enterprise Interaction Layer",

    headline:
      "Decisions that turn into action — not into meeting notes that go nowhere.",

    description:
      "SAMVAD is Datacharya's enterprise interaction layer — converting advisory outcomes and leadership decisions into structured operating rhythm through workflows, collaboration, and action tracking.",

    Featuredcapabilitytitle:
      "CXO COCKPIT — Decision-to-Execution Intelligence",

    Featuredcapabilitycontent:
      "A single layer where advisory, decisions, and action registers come together.",

    features: [
      "Enterprise workflows and structured action registers",
      "CXO cockpit for decision tracking and execution visibility",
      "Collaboration and coordination across leadership and teams",
      "Utilities and operational tools that keep advisory in motion",
    ],
    icon: SAMVAD,
    tone: "orange",
  },
];

const SmritiContent = () => (
  <div className="approach-platforms_body">
    {/* <h3 className="h30px">Governance that lives in your systems — not in a SharePoint folder.</h3>
    <p>
      Smriti is Datacharya&apos;s enterprise governance framework — a structured
      system that links policies to procedures, procedures to controls, and
      controls to verifiable evidence. Built for enterprises that already have
      governance documents but lack governance execution.
    </p> */}

    <h4 className="h30px">Smriti Packs</h4>
    <div className="approach-platforms_packs">
      {packs.map((pack) => (
        <article key={pack.title}>
          <h5>{pack.title}</h5>
          <p className="label">{pack.label}</p>
          <p className="audience">For: <span>{pack.audience}</span></p>
          <p className="copy">{pack.copy}</p>
        </article>
      ))}
    </div>

    {/* <div className="approach-platforms__capability">
      <span>FEATURED CAPABILITY</span>
      <h4>SUTRA - SAP Blueprinting & KRIYA Execution Governance</h4>
      <div>
        <h5>SAP blueprints that actually guide implementation — not just document it.</h5>
        <p>
          Sutra takes the governance standards defined in Smriti and converts
          them into structured, implementable, ready SAP blueprints.
        </p>
        <ul>
          <li>✓ Reconciled SAP implementations</li>
          <li>✓ SAP-AAA migration blueprints</li>
          <li>✓ Post-acquisition system alignment</li>
          <li>✓ Remediation blueprints after failed implementations</li>
        </ul>
      </div>
    </div> */}

    
  </div>
);

const ApproachPlatforms = () => {
  const location = useLocation();

  const [openItem, setOpenItem] = useState(1);

 useEffect(() => {
  const params = new URLSearchParams(location.search);
  const tab = params.get("tab");

  const selected = platformData.find((item) => item.slug === tab);

  if (selected) {
    setOpenItem(selected.id);

    setTimeout(() => {
      const element = document.getElementById(`section-${selected.id}`);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 100);
  }
}, [location]);

  const toggleItem = (id) => {
    setOpenItem((current) => (current === id ? null : id));
  };
  

  return (
    <section className="approach-platforms">
      <div className="container">
        <div className="approach-platforms__list">
          {platformData.map((item) => {
            const isOpen = openItem === item.id;
            const panelId = `${item.id}-panel`;

            return (
              // <article
              //   className={`approach-platforms__item ${isOpen ? "is-open" : ""} ${item.tone} `}
              //   key={item.id}
              // >

              <article
  id={`section-${item.id}`}
  className={`approach-platforms__item ${isOpen ? "is-open" : ""} ${item.tone}`}
  key={item.id}
>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => toggleItem(item.id)}
                >
                  <span className="approach-platforms__item-icon">
                    <img src={item.icon} alt={item.icon} />
                  </span>
                  <span className="approach-platforms__item-title">
                    {/* <h2 className={`H240px ${item.tone === "orange" ? "orange" : "blue"}`}>{item.title}</h2> */}
                    <h2 className="H240px">{item.title}</h2>
                    <p>{item.subtitle}</p>
                  </span>
                  {/* <span className="approach-platforms__chevron" aria-hidden="true">
                    {isOpen ? "⌃" : "⌄"}
                  </span> */}
                  <span className="approach-platforms__chevron">
                    <i className={`fa-solid fa-chevron-${isOpen ? "up" : "down"}`}></i>
                  </span>
                </button>

                {isOpen && (
                  <div id={panelId} className="innerpanel">
                    
                      <div className="approach-platforms__placeholder">
                        <h3 className="h30px">{item.headline}</h3>
                        <p className="paragraph18px">{item.description}</p>
                            {item.id === 1 ? (<SmritiContent />) : ( "")}

                        <div className="approach-platforms__capability">

                          <h6>FEATURED CAPABILITY</h6>

                          <h4 className="h30px">
                            {item.Featuredcapabilitytitle}
                          </h4>

                          <div className="featuredbox">

                            <p className="paragraph16">
                                {item.Featuredcapabilitycontent}
                            </p>

                            {item.features?.length > 0 && (
                                <ul className="feature-list">
                                    {item.features.map((feature, index) => (
                                        <li key={index} >
                                        <i className="fa-solid fa-check"></i>
                                        <span className="paragraph16">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            )}

                          </div>

                          

                          

                        </div> 
                        {item.id === 1 ? (
                            <div className="approach-platforms__actions">
                                {/* <a href="/contact?interest=smriti-demo">Request a Smriti Demo →</a> */}
                                <a href="/contactUs">Request a Smriti Demo →</a>
                                <a className="outline" href="/smriti-pack-overview.pdf">Download Pack Overview ↓</a>
                            </div>
                        ) : ( "")}


                      </div>
                    
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ApproachPlatforms;
