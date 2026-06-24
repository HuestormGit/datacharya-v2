import "./WhoWeServe.scss";

const audiences = [
  { title: "Visionary Leaders", tags: ["CXOs", "Boards"] },
  { title: "Compliance Guardians", tags: ["Audit", "Risk", "Quality"] },
  { title: "Systems Builders", tags: ["CIOs", "Architects"] },
  { title: "Talent Orchestrators", tags: ["CHROs", "OD Heads"] },
  { title: "Growth Engineers", tags: ["Founders", "BU Heads"] },
  {
    title: "Sector Specialists",
    tags: ["Pharma", "Fintech", "Infrastructure", "Agriculture", "MSMEs"],
  },
];

const WhoWeServe = () => {
  return (
    <section className="WhoWeServe-section">
      <div className="container">
        <div className="section-title">
          <h2 className="H160">Who We Serve</h2>
          <p className="paragraph18px">Six key stakeholder groups across industries</p>
        </div>

        <div className="serve-grid">
          {audiences.map((audience) => (
            <article className="WhoWeServe-card" key={audience.title}>
              <h3 className="h30px">{audience.title}</h3>
              <div className="tags">
                {audience.tags.map((tag) => (
                  <span key={tag} className="paragraph16">{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeServe;
