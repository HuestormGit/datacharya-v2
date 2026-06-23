import { useEffect, useState } from "react";
import api from "../../services/api";
import "./Insights.scss";

const Insights = ({ variant = "page" }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getBlogs();
  }, [variant]);

  const getBlogs = async () => {
    try {
      const endpoint =
        variant === "home"
          ? "/blogs?populate=*&sort=publish_date:desc&pagination[limit]=3"
          : "/blogs?populate=*&sort=publish_date:desc";

      const response = await api.get(endpoint);

      setArticles(response.data.data);
    } catch (error) {
      console.error("Blog fetch error:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <section
      className={`insights-section ${
        variant === "page" ? "insights-section--page" : ""
      }`}
    >
      <div className="container">
        {variant === "home" && (
            <div className="section-title">
                <div>
                <h2 className="H160">
                    Latest <span>Insights</span>
                </h2>
                <p>Expert perspectives on enterprise governance</p>
                </div>

                <a href="/insights" className="myButton">
                View all →
                </a>
            </div>
        )}

        <div
          className={
            variant === "home"
              ? "home-insights-grid"
              : "insights-grid"
          }
        >
          {articles.map((article, index) => (
            <article className="insight-card" key={article.id}>
              {/* <img
                    src={`${import.meta.env.VITE_API_URL}${article.featured_image?.url}`}
                    alt={article.title}
              /> */}
               <img src={article.featured_image?.url || ""} alt={article.title} />

              <div className="content">
                <div className="insight-meta">
                  <span className={index === 1 ? "orange" : ""}>
                    {article.tags?.[0]?.Name}
                  </span>

                  <small>
                    {new Date(article.publish_date).toLocaleDateString(
                      "en-GB",
                      {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      }
                    )}
                  </small>
                </div>

                <h3 className="h30px">{article.title}</h3>

                <p className="paragraph16">{article.excerpt}</p>

                {/* <a href={`/insights/${article.url}`} className={index === 1 ? "orange" : ""}>
                  Read More →
                </a> */}

                <a href={article.read_more_link || `/insights/${article.url}`} target={article.read_more_link ? "_blank" : "_self"} rel={article.read_more_link ? "noopener noreferrer" : ""} className={index === 1 ? "orange" : ""}>
                  Read More →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Insights;