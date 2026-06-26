import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getHeroSlides } from "../../services/heroService";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import "./HeroSlider.scss";

const HeroSlider = () => {
  const [slides, setSlides] = useState([]);
  const [loading, setLoading] = useState(true);

  const getTextFromBlocks = (blocks) => {
    if (!blocks || !Array.isArray(blocks)) return "";

    return blocks
      .map((block) =>
        block.children?.map((child) => child.text).join("") || ""
      )
      .join(" ");
  };

  useEffect(() => {
    const loadSlides = async () => {
      try {
        const data = await getHeroSlides();
        setSlides(data);
      } catch (error) {
        console.error("Hero Slider Error:", error);
      } finally {
        setLoading(false);
      }
    };

    loadSlides();
  }, []);

  if (loading) return null;

  if (!slides.length) return null;

  return (
    <section className="hero-slider">
      <Swiper
        modules={[Autoplay, Pagination]}
        loop={true}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
      >
        {slides.map((hero) => (
          <SwiperSlide key={hero.id}>
            <section
              className="hero-section"
              style={{
                backgroundImage: `
                  linear-gradient(
                    90deg,
                    rgba(255,255,255,.18),
                    rgba(255,255,255,.02)
                  ),
                  url(${hero.image?.url})
                `,
              }}
            >
              <div className="container">
                <div className="hero-content">
                  <p className="hero-eyebrow paragraph18px">
                    {hero.eyebrow}
                  </p>

                  <h1 className="H160">
                    {getTextFromBlocks(hero.title)}
                  </h1>

                  <p className="hero-summary paragraph18px">
                    {getTextFromBlocks(hero.summary)}
                  </p>

                  <div className="hero-btns row">
                    <div className="col-lg-3 col-md-4 col-sm-12">
                        <Link className="btn-dark Button" to={hero.primaryButtonLink}>
                            {hero.primaryButtonText}
                        </Link>

                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-12">
                        <Link className="btn-light Button" to={hero.secondaryButtonLink}>
                            {hero.secondaryButtonText}
                        </Link>
                    </div>
                    

                    
                  </div>

                  {hero.benefits?.length > 0 && (
                    <ul className="hero-benefits">
                      {hero.benefits.map((item) => (
                        <li key={item.id}>
                          <strong className="paragraph18px">{item.title}</strong>
                          <span className="Paragrapha16">{item.description}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </section>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroSlider;