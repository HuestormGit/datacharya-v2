import "./ContactUsHero.scss";
import heroImage from "../../assets/images/aboutherobg.png";

const ContactUsHero = () => {
  return (
    <section
      className="ContactUs-hero"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="ContactUs-hero__content container">
        <p className="paragraph16">CXO ADVISORY</p>
        <h1>
          <span>Strategic advisory</span> —
          <br />
          with the ability to execute
        </h1>
        <p className="paragraph16">
          CXO-level governance advisory that bridges the gap between strategy
          and execution.
        </p>
      </div>
    </section>
  );
};

export default ContactUsHero;
