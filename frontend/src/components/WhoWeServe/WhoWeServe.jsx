import "./WhoWeServe.scss";

const WhoWeServeData = [
  {
    id: 1,
    title: "Visionary Leaders",
    tags: ["CXOs", "Boards"],
  },
  {
    id: 2,
    title: "Compliance Guardians",
    tags: ["Audit","Risk","Quality",],
  },
  {
    id: 3,
    title: "Systems Builders",
    tags: ["CIOs", "Architects"],
  },
  {
    id: 4,
    title: "Talent Orchestrators",
    tags: ["CHROs","OD Heads",],
  },
];

const WhoWeServe = () => {
  return (
    <section className="WhoWeServe-section">
      <div className="container">

        {/* SECTION TITLE */}
        <div className="section-title">
          <span className="paragraph18px">
            THE DATACHARYA FRAMEWORK
          </span>

          <h2 className="H160">
            Four WhoWeServe Pillars
          </h2>

          <p className="paragraph18px">
            A structured system that unifies governance,
            execution, and assurance across your enterprise
          </p>
        </div>

        {/* WhoWeServe GRID */}
        <div className="row">

          {WhoWeServeData.map((item) => (

            <div
              className="col-lg-6 col-md-6 mb-4"
              key={item.id}
            >

              <div className="WhoWeServe-card">

                {/* ICON + TITLE */}
                <div className="card-top">

                  <div>
                    <h3>{item.title}</h3>
                  </div>

                </div>


                {/* TAGS */}
                <div className="tags">

                  {item.tags.map((tag, index) => (

                    <span key={index}>
                      {tag}
                    </span>

                  ))}

                </div>


              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default WhoWeServe;