import "./AdvisoryJourney.scss";
import engagementImage from "../../assets/images/herobg.png";

const scopeItems = [
  "Enterprise governance design",
  "SAP transformation strategy",
  "Audit and assurance modernization",
  "IPO readiness",
  "Organizational alignment",
  "Data strategy and governance",
];

const engagementSteps = [
  "Duration & Timeline",
  "Deliverables & Accountability",
  "Team Structure",
];

const testimonials = [
  {
    quote:
      "Datacharya connected our governance strategy to practical execution, giving leadership clearer accountability and measurable progress.",
    name: "Rahul Mehta",
    role: "CFO",
    company: "Mid-cap Manufacturing",
    outcome: "IPO readiness achieved with full governance traceability.",
  },
  {
    quote:
      "The engagement moved beyond advisory recommendations and gave our teams a structure they could operate and continuously improve.",
    name: "Anita Rao",
    role: "Transformation Head",
    company: "Enterprise Services",
    outcome: "Control ownership and execution visibility improved across teams.",
  },
];

const AdvisoryJourney = () => {
  return (
    <section className="advisory-journey">
      <div className="container">
        <div className="advisory-journey__stack">
          <article className="advisory-scope advisory-panel">
            <header>
              <h2>
                Advisory <span>Scope</span>
              </h2>
              <p>Strategic guidance across the full governance lifecycle</p>
            </header>

            <div className="advisory-scope__grid">
              {scopeItems.map((item, index) => (
                <div key={item}>
                  <span className={index % 3 === 1 ? "orange" : ""}>✓</span>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="engagement-model advisory-panel">
            <div className="engagement-model__image">
              <img src={engagementImage} alt="Enterprise engagement environment" />
            </div>

            <div className="engagement-model__content">
              <h2>
                Engagement
                <br />
                <span>Model</span>
              </h2>
              <p>Strategic guidance across the full governance lifecycle</p>

              <ol>
                {engagementSteps.map((step, index) => (
                  <li key={step}>
                    <span>{index + 1}</span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          </article>

          <article className="advisory-testimonials advisory-panel">
            <header>
              <h2>
                Trusted by <span>CXO Leaders</span>
              </h2>
              <p>Strategic outcomes delivered across sectors</p>
            </header>

            <div className="advisory-testimonials__grid">
              {testimonials.map((testimonial) => (
                <blockquote key={testimonial.name}>
                  <span className="quote-mark">“</span>
                  <p>{testimonial.quote}</p>
                  <footer>
                    <span className="avatar" aria-hidden="true">
                      {testimonial.name
                        .split(" ")
                        .map((part) => part[0])
                        .join("")}
                    </span>
                    <div>
                      <strong>{testimonial.name}</strong>
                      <small>{testimonial.role}</small>
                      <small>{testimonial.company}</small>
                    </div>
                  </footer>
                  <div className="outcome">
                    <strong>OUTCOME</strong>
                    <p>{testimonial.outcome}</p>
                  </div>
                </blockquote>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default AdvisoryJourney;
