import "./Testimonials.scss";

const testimonials = [
  {
    text: "Datacharya didn't just audit our controls. They showed us how to make them self-enforcing. Our ITGC cycle went from 6 months to 8 weeks.",
    name: "Rahul Mehta",
    role: "CFO",
    company: "Mid-cap Manufacturing (IPO-bound)",
    initials: "RM",
  },
  {
    text: "We had SAP implemented for 3 years. It took Datacharya 6 weeks to show us we were using less than 40% of what we'd paid for, and how to fix it.",
    name: "Priya Sharma",
    role: "Head of IT Governance",
    company: "Leading BFSI Institution",
    initials: "PS",
  },
  {
    text: "The Shruti platform gave us real-time control visibility for the first time. No more spreadsheet archaeology before board meetings.",
    name: "Amit Patel",
    role: "VP of Internal Audit",
    company: "Global Manufacturing Conglomerate",
    initials: "AP",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonial-section">
      <div className="container">
        <div className="section-title">
          <span>OUR METHODOLOGY</span>
          <h2>
            Outcomes that are <span className="highlight">verifiable</span>, not
            implied.
          </h2>
        </div>

        <div className="testimonial-grid">
          {testimonials.map((item) => (
            <article className="testimonial-card" key={item.name}>
              <div className="stars">★★★★★</div>
              <div className="quote">“</div>
              <p>{item.text}</p>
              <div className="author">
                <span className="author-avatar" aria-hidden="true">
                  {item.initials}
                </span>
                <div>
                  <h4>{item.name}</h4>
                  <span>{item.role}</span>
                  <small>{item.company}</small>
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="results-text">Real results from real enterprises</p>
        <div className="stats-row">
          <div>
            <h3>6 Months → 8 Weeks</h3>
            <span>Reduced ITGC cycle</span>
          </div>
          <div>
            <h3>85% of Manual Controls</h3>
            <span>Control automation</span>
          </div>
          <div>
            <h3>90% Reduction</h3>
            <span>Evidence gathering time</span>
          </div>
        </div>

        <div className="industry-tags">
          <span>BFSI</span>
          <span>Manufacturing</span>
          <span>IPO-bound mid-caps</span>
          <span>Global Enterprises</span>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
