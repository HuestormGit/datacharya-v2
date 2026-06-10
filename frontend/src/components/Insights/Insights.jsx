import "./Insights.scss";
import insightOne from "../../assets/images/insight1.png";
import insightTwo from "../../assets/images/insight2.png";
import insightThree from "../../assets/images/insight3.png";

const articles = [
  {
    category: "Governance",
    date: "20 June 2026",
    title: "What Is Not Practiced Is Not Preserved",
    description:
      "Governance must be lived within business processes and daily execution. The same applies directly to data and digital leadership.",
    image: insightOne,
  },
  {
    category: "Assurance",
    date: "14 May 2026",
    title: "Test Data the Way Gold Is Tested",
    description:
      "Checking numbers is not true assurance. Enterprise data requires verification, context and continuous accountability.",
    image: insightTwo,
  },
  {
    category: "Policy Management",
    date: "12 April 2026",
    title: "The Six Questions a Data Leader Must Ask",
    description:
      "Good governance begins with clarity: who owns the data, why it exists, how it moves and whether it can be trusted.",
    image: insightThree,
  },
];

const pageArticles = Array.from({ length: 3 }, (_, row) =>
  articles.map((article) => ({
    ...article,
    id: `${row}-${article.title}`,
  })),
).flat();

const Insights = ({ variant = "default" }) => {
  if (variant === "page") {
    return (
      <section className="insights-section insights-section--page">
        <div className="container">
          <div className="insights-grid">
            {pageArticles.map((article, index) => (
              <article className="insight-card" key={article.id}>
                <img src={article.image} alt="" />
                <div className="content">
                  <div className="insight-meta">
                    <span className={index % 3 === 1 ? "orange" : ""}>
                      {article.category}
                    </span>
                    <small>{article.date}</small>
                  </div>
                  <h3>{article.title}</h3>
                  <p>{article.description}</p>
                  <a href="/contactUs">Read More&nbsp; →</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="insights-section">
      <div className="container">

        <div className="section-title">
          <div>
            <h2>
              Latest <span>Insights</span>
            </h2>
            <p>Expert perspectives on enterprise governance</p>
          </div>
          <a href="/insights">View all&nbsp; →</a>
        </div>

        <div className="home-insights-grid">
          {articles.map((article, index) => (
            <article className="insight-card" key={article.title}>
              <img src={article.image} alt="" />
              <div className="content">
                <div className="insight-meta">
                  <span className={index === 1 ? "orange" : ""}>
                    {article.category}
                  </span>
                  <small>{article.date}</small>
                </div>
                <h3>{article.title}</h3>
                <p>{article.description}</p>
                <a href="/insights">Read More&nbsp; →</a>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Insights;
