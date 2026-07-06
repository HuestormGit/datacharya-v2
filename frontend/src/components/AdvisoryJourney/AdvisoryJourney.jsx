import "./AdvisoryJourney.scss";
import EngagementModel from "../../assets/images/EngagementModel.png";
import quote from "../../assets/images/quote.png";
import SliderModule from "react-slick";
import { useState } from "react";
import { Link } from "react-router-dom";

const Slider = SliderModule.default || SliderModule;

const scopeItems = [
  "Enterprise governance design",
  "SAP transformation strategy",
  "Audit and assurance modernization",
  "IPO readiness",
  "Organizational alignment",
  "Data strategy and governance",
];

const engagementSteps = [
  "Duration & Timeline",
  "Deliverables & Accountability",
  "Team Structure",
];

const testimonials = [
  {
    quote:
      "Datacharya didn't just advise – they anticipated. Before we encountered our first major issue, they had already prepared us for it. The infrastructure, the core team, the vendor selection — all done right the first time. Additionally, they still support the team as and when required even after the contract.",
    name: "Hill Selia",
    role: "CEO",
    company: "RamKrinsha Pure Finance, Mumbai",
    outcome:
      "Technical infrastructure and vendor ecosystem established. Foundation built for the next ten years of operations.",
  },
  {
    quote:
      "We weren't using our technology as well as we should have been. Datacharya gave us a clear, structured path through the problem – practical enough to implement without disrupting operations. The difference showed quickly. Our processes became more coordinated, our teams better aligned, and we finally felt in control of our technology rather than the other way around.",
    name: "Tej Dholakia",
    role: "Founder",
    company: "SRK PureMed, Mumbai",
    outcome:
      "Data processes streamlined. Technology utilisation improved. Cross-department coordination and operational performance measurably stronger.",
  },
];

const AdvisoryJourney = () => {
  const [mobileSlide, setMobileSlide] = useState(0);
  const [desktopSlide, setDesktopSlide] = useState(0);

  const mobileSettings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 600,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,

    beforeChange: (_, next) => {
      setMobileSlide(next);
    },
  };

  const desktopSettings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 600,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 2,
    slidesToScroll: 1,

    beforeChange: (_, next) => {
      setDesktopSlide(next);
    },
  };

  const mobileProgress = Math.min(
    ((mobileSlide + 1) / testimonials.length) * 100,
    100
  );

  const desktopProgress = Math.min(
    ((desktopSlide + 1) /
      Math.max(testimonials.length - 1, 1)) *
      100,
    100
  );

  const renderTestimonial = (testimonial, index) => (
    <div key={index}>
      <blockquote className="testimonial-card">
        <span className="quote-mark">
          <img src={quote} alt="quote" />
        </span>

        <p className="paragraph16">
          "{testimonial.quote}"
        </p>

        <footer>
          <span className="avatar">
            {testimonial.name
              .split(" ")
              .map((part) => part[0])
              .join("")}
          </span>

          <div>
            <p className="testoName">
              {testimonial.name}
            </p>

            <p className="paragraph16 testoRole">
              {testimonial.role}
            </p>

            <p className="paragraph16 testoCompany">
              {testimonial.company}
            </p>
          </div>
        </footer>

        <div className="outcome">
          <p className="outcomeheading paragraph16">
            OUTCOME
          </p>

          <p className="content">
            {testimonial.outcome}
          </p>
        </div>
      </blockquote>
    </div>
  );

return (
  <section className="advisory-journey">
    <div className="container">
      <div className="advisory-journey_stack">

        {/* Advisory Scope */}
        <article className="advisory-scope-top advisory-panel">
          <header>
            <h2 className="H160">
              Advisory <span>Scope</span>
            </h2>
            <p>
              Strategic guidance across the full governance lifecycle
            </p>
          </header>

          <div className="advisory-scope">
            {scopeItems.map((item, index) => (
              <div key={item}>
                <i
                  className={
                    index % 2 !== 0
                      ? "fa-regular fa-circle-check orange"
                      : "fa-regular fa-circle-check"
                  }
                ></i>

                <p className="paragraph18px">{item}</p>
              </div>
            ))}
          </div>
        </article>

        {/* Engagement Model */}
        <article className="engagement-model advisory-panel">
          <div className="engagement-model_image">
            <img
              src={EngagementModel}
              alt="Enterprise engagement environment"
            />
          </div>

          <div className="engagement-model_content">
            <h2 className="H160">
              Engagement <span>Model</span>
            </h2>

            <p>
              Strategic guidance across the full governance lifecycle
            </p>

            <ol>
              {engagementSteps.map((step, index) => (
                <li key={step}>
                  <span className="H240px number">
                    {index + 1}
                  </span>

                  <span className="paragraph18px">
                    {step}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </article>

        {/* Testimonials */}
        <article className="advisory-testimonials advisory-panel">
          <header>
            <h2 className="H160">
              Trusted by <span>CXO Leaders</span>
            </h2>

            <p className="paragraph16_24_400">
              Strategic outcomes delivered across sectors
            </p>
          </header>

          {/* Mobile Slider */}
          <div className="advisory-testimonials_slider mobile-slider">
            <Slider {...mobileSettings}>
              {testimonials.map((testimonial, index) =>
                renderTestimonial(testimonial, index)
              )}
            </Slider>

            <div className="custom-progress">
              <span
                style={{
                  width: `${mobileProgress}%`,
                }}
              />
            </div>
          </div>

          {/* Desktop & Tablet Slider */}
          <div className="advisory-testimonials_slider desktop-slider">
            <Slider {...desktopSettings}>
              {testimonials.map((testimonial, index) =>
                renderTestimonial(testimonial, index)
              )}
            </Slider>

            <div className="custom-progress">
              <span
                style={{
                  width: `${desktopProgress}%`,
                }}
              />
            </div>
          </div>
        </article>
      </div>
    </div>

    <div className="container">
      <div className="advisory-journey_btn text-center">
        <Link
          to="/contactUs"
          className="advisory-btn myButton"
        >
          Talk to Our Advisory Team →
        </Link>
      </div>
    </div>
  </section>
);
};

export default AdvisoryJourney;