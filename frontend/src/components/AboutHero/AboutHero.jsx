import "./AboutHero.scss";

const AboutHero = () => {
  return (
    <section className="AboutHero-section">
      <div className="container text-center">
        <p className="about-hero-eyebrow paragraph18px">ABOUT US</p>
        {/* <h2 className="H160">
          Where ancient <span>wisdom meets</span>
          <br />
          modern data science
        </h2> */}
        <h2 className="H160">
          Governance is only valuable when 
          <br />
          it becomes executable
        </h2>

        {/* <p className="about-hero-copy paragraph18px">
          Datacharya emerged from 30 years of enterprise experience, combining
          scriptural wisdom with contemporary data science.
        </p> */}
        <p className="about-hero-copy paragraph18px">
          {/* Datacharya transforms governance advisory into operational execution, continuous assurance and measurable enterprise outcomes. */}
          Datacharya combines senior CXO advisory with executable enterprise platforms to turn governance intent into evidence-backed controls, better decisions and measurable outcomes.
        </p>
      </div>
    </section>
  );
};

export default AboutHero;
