import "./Testimonials.scss";
import quote  from "../../assets/images/quote.png";

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
          <h5 className="paragraph18px">OUR METHODOLOGY</h5>
          <h2 className="H160">
            Outcomes that are <span className="highlight">verifiable</span>, not
            implied.
          </h2>
        </div>

        <div className="testimonial-grid">
          {testimonials.map((item) => (
            <article className="testimonial-card" key={item.name}>
              <div className="stars">★★★★★</div>
              <div className="quote"> 
                <img src={quote} alt="quote"/>
              </div>
              <p className="paragraph16">{item.text}</p>
              <div className="author">
                <span className="author-avatar" aria-hidden="true">
                  {item.initials}
                </span>
                <div className="author-info">
                  <h4 className="author-name">{item.name}</h4>
                  <p className="paragraph16 author-role">{item.role}</p>
                  <p className="paragraph16 author-company">{item.company}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="paragraph16 results-text">Real results from real enterprises</p>
        <div className="stats-row">
          <div>
            <h3 className="h30px">6 Months → 8 Weeks</h3>
            <span className="paragraph16">Reduced ITGC cycle</span>
          </div>
          <div>
            <h3 className="h30px">85% of Manual Controls</h3>
            <span className="paragraph16">Control automation</span>
          </div>
          <div>
            <h3 className="h30px">90% Reduction</h3>
            <span className="paragraph16">Evidence gathering time</span>
          </div>
        </div>

        <div className="industry-tags">
          <span className="myButton">BFSI</span>
          <span className="myButton">Manufacturing</span>
          <span className="myButton">IPO-bound mid-caps</span>
          <span className="myButton">Global Enterprises</span>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
