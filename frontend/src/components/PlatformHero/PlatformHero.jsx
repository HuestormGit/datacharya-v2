import "./PlatformHero.scss";
import platformHero from "../../assets/images/approach.png";

const PlatformHero = () => {
  return (
    <section
      className="platform-hero"
      style={{ backgroundImage: `url(${platformHero})` }}
    >
      <div className="platform-hero__content container">
        <p className="paragraph16">PLATFORMS</p>
        <h1 className="H160">Ecosystem of Transformation</h1>
        <p className="paragraph18px platform-hero__summary">
          An interoperable governance ecosystem that converts advisory into
          executable workflows, continuous assurance and measurable enterprise
          outcomes.
        </p>
      </div>
    </section>
  );
};

export default PlatformHero;
