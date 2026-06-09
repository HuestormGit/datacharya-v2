import "./Insights.scss";

const Insights = () => {
  return (
    <section className="insights-section">
      <div className="container">

        <div className="section-title">
          <h2>Latest Insights</h2>
        </div>

        <div className="row">

          <div className="col-lg-4">
            <div className="insight-card">
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692"
                alt=""
              />

              <div className="content">
                <span>Governance</span>

                <h3>What is not practiced is not preserved</h3>

                <p>
                  Governance gaps create execution problems.
                </p>

                <a href="#">Read More</a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Insights;