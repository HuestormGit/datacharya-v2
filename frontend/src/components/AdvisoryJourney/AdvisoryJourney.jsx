import "./AdvisoryJourney.scss";
import EngagementModel from "../../assets/images/EngagementModel.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

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
      "Datacharya connected our governance strategy to practical execution, giving leadership clearer accountability and measurable progress.",
    name: "Rahul Mehta",
    role: "CFO",
    company: "Mid-cap Manufacturing",
    outcome: "IPO readiness achieved with full governance traceability.",
  },
  {
    quote:
      "The engagement moved beyond advisory recommendations and gave our teams a structure they could operate and continuously improve.",
    name: "Anita Rao",
    role: "Transformation Head",
    company: "Enterprise Services",
    outcome:
      "Control ownership and execution visibility improved across teams.",
  },
];

const AdvisoryJourney = () => {
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
              <p>Strategic guidance across the full governance lifecycle</p>
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
                  <li key={step} >
                    <span className="H240px number">{index + 1}</span>
                    <span className="paragraph18px"> {step} </span>
                  </li>
                ))}
              </ol>
            </div>
          </article>

          {/* Testimonials Slider */}
          <article className="advisory-testimonials advisory-panel">
            <header>
              <h2 className="H160">
                Trusted by <span>CXO Leaders</span>
              </h2>
              <p className="paragraph16_24_400">Strategic outcomes delivered across sectors</p>
            </header>

            <div className="advisory-testimonials__slider">
              <Swiper
                modules={[Autoplay, Pagination]}
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                autoplay={{
                  delay: 4000,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
              >
                {testimonials.map((testimonial, index) => (
                  <SwiperSlide key={index}>
                    <blockquote className="testimonial-card">
                      <span className="quote-mark">“</span>

                      <p>{testimonial.quote}</p>

                      <footer>
                        <span className="avatar">
                          {testimonial.name
                            .split(" ")
                            .map((part) => part[0])
                            .join("")}
                        </span>

                        <div>
                          <strong>{testimonial.name}</strong>
                          <small>{testimonial.role}</small>
                          <small>{testimonial.company}</small>
                        </div>
                      </footer>

                      <div className="outcome">
                        <strong>OUTCOME</strong>
                        <p>{testimonial.outcome}</p>
                      </div>
                    </blockquote>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default AdvisoryJourney;