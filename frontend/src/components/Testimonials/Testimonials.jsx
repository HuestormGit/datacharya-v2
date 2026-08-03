import "./Testimonials.scss";
import quote  from "../../assets/images/quote.png";

const testimonials = [
  {
    text: "Datacharya didn't just advise – they anticipated. Before we encountered our first major issue, they had already prepared us for it. The infrastructure, the core team, the vendor selection — all done right the first time. Additionally, they still support the team as and when required even after the contract.",
    name: "Hill Selia",
    role: "CFO",
    company: "RamKrinsha Pure Finance, Mumbai",
    outcome: "Technical infrastructure and vendor ecosystem established. Foundation built for the next ten years of operations.",
    initials: "HS",
  },
  {
    text: "We weren't using our technology as well as we should have been. Datacharya gave us a clear, structured path through the problem – practical enough to implement without disrupting operations. The difference showed quickly. Our processes became more coordinated, our teams better aligned, and we finally felt in control of our technology rather than the other way around.",
    name: "Tej Dholakia",
    role: " Founder",
    company: "SRK PureMed, Mumbai",
    outcome: "Data processes streamlined. Technology utilisation improved. Cross-department coordination and operational performance measurably stronger.",
    initials: "TD",
  },
  // {
  //   text: "The Shruti platform gave us real-time control visibility for the first time. No more spreadsheet archaeology before board meetings.",
  //   name: "Amit Patel",
  //   role: "VP of Internal Audit",
  //   company: "Global Manufacturing Conglomerate",
  //   initials: "AP",
  // },
];

const Testimonials = () => {
  return (
    <section className="testimonial-section">
      <div className="container">
        <div className="section-title">
          {/* <h5 className="paragraph18px">OUR METHODOLOGY</h5>
          <h2 className="H160">
            Outcomes that are <span className="highlight">verifiable</span>, not
            implied.
          </h2> */}
          <h5 className="paragraph18px">Illustrative and verified outcomes</h5>
          <h2 className="H160">
            Illustrative examples are clearly marked; verified client evidence is published only with approval.
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
              <div className="outcome-box">
                  <h6 className="paragraph16">OUTCOME</h6>
                  <p className="paragraph16">{item.outcome}</p>
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
