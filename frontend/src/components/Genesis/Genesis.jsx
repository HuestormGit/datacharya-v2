import "./Genesis.scss";
import advisoryImage from "../../assets/images/advisory.png";

const Genesis = () => {
  return (
    <section className="Genesis-section">
      <div className="container">
        <div className="genesis-intro">
          <h2 className="H160">Genesis</h2>
          <div className="genesis-info">
            <p className="genesis-lead h30px">
              Datacharya emerged from 30 years of enterprise experience and
              interactions with global consultants. The founders recognized that
              Western consulting approaches often miss nuances of Indian business
              philosophy.
            </p>
            <p className="genesis-note h30px">
              We emphasize <span className="paragraph18px">holistic rather than transactional</span> thinking,
              combining ancient scriptural wisdom with contemporary data science.
            </p>
          </div>
        </div>

        <div className="core-philosophy">
          <h2 className="H160">Core Philosophy</h2>
          <p className="H240px">
            Data is not just an asset - it is a responsibility.
            <br />
            When governed well, it becomes dharma.
          </p>
          <small className="paragraph16">- Mission Statement</small>
        </div>

        <div className="ethical-intelligence">
          <div className="img-box">
            <img src={advisoryImage} alt="Business leaders in a governance discussion" />

          </div>
          <div className="ethical-copy">
            <h2 className="H160">Ethical Intelligence</h2>
            <h3 className="h30px">Where logic intersects with deeper business purpose.</h3>
            <p className="paragraph18px">
              We operate to ensure strategic visions are authentically lived
              across every level of execution.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Genesis;
