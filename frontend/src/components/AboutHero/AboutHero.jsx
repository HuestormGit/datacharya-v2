import "./AboutHero.scss";

const AboutHero = () => {
  return (
    <section className="AboutHero-section">
      <div className="container text-center">
        <p className="about-hero-eyebrow">ABOUT US</p>
        <h2 className="H160">
          Where ancient <span>wisdom meets</span>
          <br />
          modern data science
        </h2>
        <p className="about-hero-copy">
          Datacharya emerged from 30 years of enterprise experience, combining
          scriptural wisdom with contemporary data science.
        </p>
      </div>
    </section>
  );
};

export default AboutHero;
