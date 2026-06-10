import { useState } from "react";
import "./ApproachPlatforms.scss";

const packs = [
  {
    title: "ERP Pack",
    label: "Process Governance",
    audience: "For: CIO / SAP Program Leads",
    copy: "SAP and ERP process standards, linked to controls and exceptions. Outputs for implementation and operations.",
  },
  {
    title: "IFC Pack",
    label: "Internal Financial Controls",
    audience: "For: CFO / Finance Controller",
    copy: "Financial control frameworks for accuracy, reliability, and regulatory compliance. Linked to SAP process flows.",
  },
  {
    title: "IPO Pack",
    label: "Listing Readiness",
    audience: "For: CEO / Board / Company Secretary",
    copy: "Corporate governance frameworks for public market readiness, controls, disclosures, board processes.",
  },
  {
    title: "EXE Pack",
    label: "Operating Discipline",
    audience: "For: COO / Transformation Head",
    copy: "KPI governance, performance management frameworks, operating procedures linked to strategic intent.",
  },
  {
    title: "RASE Pack",
    label: "Risk, Audit, Strategy, ESG",
    audience: "For: CAC / Risk Officer / Board",
    copy: "Enterprise risk framework, audit governance, strategic planning controls, and ESG reporting governance.",
  },
];

const platformItems = [
  {
    id: "smriti",
    title: "SMRITI + SUTRA",
    subtitle: "Enterprise Governance Framework & SAP Blueprint Design",
    icon: "▣",
    tone: "blue",
  },
  {
    id: "shruti",
    title: "SHRUTI",
    subtitle: "AI Assurance & Execution Engine",
    icon: "⬡",
    tone: "orange",
  },
  {
    id: "samyog",
    title: "SAMYOG",
    subtitle: "Trust & Organizational Alignment",
    icon: "♙",
    tone: "blue",
  },
  {
    id: "samvad",
    title: "SAMVAD",
    subtitle: "Enterprise Interaction & Collaboration",
    icon: "□",
    tone: "orange",
  },
];

const SmritiContent = () => (
  <div className="approach-platforms__body">
    <h3>Governance that lives in your systems — not in a SharePoint folder.</h3>
    <p>
      Smriti is Datacharya&apos;s enterprise governance framework — a structured
      system that links policies to procedures, procedures to controls, and
      controls to verifiable evidence. Built for enterprises that already have
      governance documents but lack governance execution.
    </p>

    <h4>Smriti Packs</h4>
    <div className="approach-platforms__packs">
      {packs.map((pack) => (
        <article key={pack.title}>
          <h5>{pack.title}</h5>
          <strong>{pack.label}</strong>
          <span>{pack.audience}</span>
          <p>{pack.copy}</p>
        </article>
      ))}
    </div>

    <div className="approach-platforms__capability">
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
    </div>

    <div className="approach-platforms__actions">
      <a href="/contact?interest=smriti-demo">Request a Smriti Demo →</a>
      <a className="outline" href="/smriti-pack-overview.pdf">Download Pack Overview ↓</a>
    </div>
  </div>
);

const ApproachPlatforms = () => {
  const [openItem, setOpenItem] = useState("smriti");

  const toggleItem = (id) => {
    setOpenItem((current) => (current === id ? null : id));
  };

  return (
    <section className="approach-platforms">
      <div className="container">
        <div className="approach-platforms__list">
          {platformItems.map((item) => {
            const isOpen = openItem === item.id;
            const panelId = `${item.id}-panel`;

            return (
              <article
                className={`approach-platforms__item ${isOpen ? "is-open" : ""}`}
                key={item.id}
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => toggleItem(item.id)}
                >
                  <span className={`approach-platforms__item-icon ${item.tone}`}>
                    {item.icon}
                  </span>
                  <span className="approach-platforms__item-title">
                    <strong>{item.title}</strong>
                    <small>{item.subtitle}</small>
                  </span>
                  <span className="approach-platforms__chevron" aria-hidden="true">
                    {isOpen ? "⌃" : "⌄"}
                  </span>
                </button>

                {isOpen && (
                  <div id={panelId}>
                    {item.id === "smriti" ? (
                      <SmritiContent />
                    ) : (
                      <div className="approach-platforms__placeholder">
                        <p>{item.subtitle}</p>
                      </div>
                    )}
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
