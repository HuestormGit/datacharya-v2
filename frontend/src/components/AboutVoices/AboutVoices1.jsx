import "./AboutVoices.scss";

const voices = [
  {
    quote:
      "Datacharya connected our governance strategy to practical execution, giving leadership clearer accountability and measurable progress.",
    initials: "RM",
    name: "Rahul Mehta",
    role: "CFO",
    company: "Mid-cap Manufacturing",
    outcome: "IPO readiness achieved in 9 months with full governance traceability.",
  },
  {
    quote:
      "The engagement moved beyond advisory recommendations and gave our teams a structure they could operate and continuously improve.",
    initials: "AR",
    name: "Anita Rao",
    role: "Transformation Head",
    company: "Enterprise Services",
    outcome: "Control ownership and execution visibility improved across teams.",
  },
];

const AboutVoices = () => {
  return (
    <section className="about-voices">
      <div className="container">
        <div className="voices-card">
          <h2 className="H160">Client Voices</h2>
          <div className="voices-grid">
            {voices.map((voice) => (
              <article key={voice.name}>
                <span className="quote-mark" aria-hidden="true">
                  &ldquo;
                </span>
                <p className="voice-quote">{voice.quote}</p>
                <div className="voice-person">
                  <span>{voice.initials}</span>
                  <div>
                    <strong>{voice.name}</strong>
                    <small>{voice.role}</small>
                    <small>{voice.company}</small>
                  </div>
                </div>
                <p className="outcome-label">OUTCOME</p>
                <p className="voice-outcome">{voice.outcome}</p>
              </article>
            ))}
          </div>
          <div className="voices-progress" aria-hidden="true">
            <span />
          </div>
        </div>

        <p className="about-closing">
          Strategic visions <span>authentically lived</span>
          <br />
          across every level of <em>execution</em>
        </p>
      </div>
    </section>
  );
};

export default AboutVoices;
