import "./ApproachHero.scss";
import approachImage from "../../assets/images/approach.png";

const ApproachHero = () => {
  return (
    <section
      className="approach-hero"
      style={{ backgroundImage: `url(${approachImage})` }}
    >
      <div className="approach-hero__overlay"></div>

      <div className="container approach-hero__content">
        <p className="paragraph16">OUR APPROACH</p>
        <h1>Governance Intelligence<br />Meets Operational Execution</h1>
        <p className="paragraph16 approach-hero__summary">
          A continuous cycle that converts governance strategy into execution,
          assurance and measurable outcomes.
        </p>
      </div>
    </section>
  );
};

export default ApproachHero;
