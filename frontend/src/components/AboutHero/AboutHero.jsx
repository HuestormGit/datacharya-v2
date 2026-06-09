// export default function AboutHero(){return <section>About Hero</section>}
import "./AboutHero.scss";

const AboutHero = () => {
  return (
    <section className="AboutHero-section">

      <div className="container text-center">
        <p className="paragraph18px">
          ABOUT US
        </p>

        <h2 className="H160">
          Where ancient <span>wisdom meets</span>  modern data science
        </h2>

        <p className="paragraph18px">
          Datacharya emerged from 30 years of enterprise experience, combining scriptural wisdom with contemporary data science.
        </p>

      </div>

    </section>
  );
};

export default AboutHero;
