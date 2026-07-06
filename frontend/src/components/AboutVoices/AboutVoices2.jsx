import "./AboutVoices.scss";
import SliderModule from "react-slick";
import quote from "../../assets/images/quote.png";
import { useState, useEffect } from "react";

const Slider = SliderModule.default || SliderModule;

const voices = [
  {
    quote:
      "Datacharya didn't just advise – they anticipated. Before we encountered our first major issue, they had already prepared us for it. The infrastructure, the core team, the vendor selection — all done right the first time. Additionally, they still support the team as and when required even after the contract.",
    initials: "HS",
    name: "Hill Selia",
    role: "CEO",
    company: "RamKrinsha Pure Finance, Mumbai",
    outcome:
      "Technical infrastructure and vendor ecosystem established. Foundation built for the next ten years of operations.",
  },
  {
    quote:
      "We weren't using our technology as well as we should have been. Datacharya gave us a clear, structured path through the problem – practical enough to implement without disrupting operations. The difference showed quickly. Our processes became more coordinated, our teams better aligned, and we finally felt in control of our technology rather than the other way around.",
    initials: "TD",
    name: "Tej Dholakia",
    role: "Founder",
    company: "SRK PureMed, Mumbai",
    outcome:
      " Data processes streamlined. Technology utilisation improved. Cross-department coordination and operational performance measurably stronger.",
  },
  // {
  //   quote:
  //     "The framework created measurable governance outcomes and aligned teams toward execution excellence.",
  //   initials: "SK",
  //   name: "Sanjay Kumar",
  //   role: "Director",
  //   company: "Technology Enterprise",
  //   outcome: "Governance compliance improved.",
  // },
  // {
  //   quote:
  //     "Execution visibility and accountability improved dramatically after implementation.",
  //   initials: "VP",
  //   name: "Vikas Patel",
  //   role: "CEO",
  //   company: "Manufacturing Group",
  //   outcome: "Operational performance increased.",
  // },
];

const AboutVoices = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(
    window.innerWidth < 768
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () =>
      window.removeEventListener("resize", handleResize);
  }, []);

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 600,
    autoplay: true,
    autoplaySpeed: 4000,

    slidesToShow: 2,
    slidesToScroll: 1,

    beforeChange: (_, next) => {
      setCurrentSlide(next);
    },

    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const visibleSlides = isMobile ? 1 : 2;

  const totalPositions = Math.max(
    voices.length - visibleSlides + 1,
    1
  );

  const progressWidth = Math.min(
    ((currentSlide + 1) / totalPositions) * 100,
    100
  );

  return (
    <section className="about-voices">
      <div className="container">
        <div className="voices-card">
          <h2 className="H160">Client Voices</h2>

          <Slider {...settings}>
            {voices.map((voice, index) => (
              <div key={index} className="slide-item">
                <article className="voice-item">
                  <span className="quote-mark">
                    <img src={quote} alt="quote" />
                  </span>

                  <p className="voice-quote paragraph16">
                    "{voice.quote}"
                  </p>

                  <div className="voice-person">
                    <span className="avatar">
                      {voice.initials}
                    </span>

                    <div className="avatar-profile">
                      <p className="avatar-name">
                        {voice.name}
                      </p>

                      <p className="avatar-role paragraph16">
                        {voice.role}
                      </p>

                      <p className="avatar-company paragraph16">
                        {voice.company}
                      </p>
                    </div>
                  </div>

                  <p className="outcome-label paragraph16">
                    OUTCOME
                  </p>

                  <p className="voice-outcome paragraph16">
                    {voice.outcome}
                  </p>
                </article>
              </div>
            ))}
          </Slider>

          <div className="custom-progress">
            <span
              style={{
                width: `${progressWidth}%`,
              }}
            />
          </div>
        </div>

        <p className="about-closing H160">
          Strategic visions{" "}
          <span className="blue">
            authentically lived
          </span>
          <br />
          across every level of{" "}
          <span className="orange">
            execution
          </span>
        </p>
      </div>
    </section>
  );
};

export default AboutVoices;