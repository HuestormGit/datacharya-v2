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

  useEffect(() => {
    const loadSlides = async () => {
      try {
        const data = await getHeroSlides();
        setSlides(data);
      } catch (error) {
        console.error(error);
      }
    };

    loadSlides();
  }, []);

  return (
    <section className="hero-slider">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{ clickable: true }}
      >
        {slides.map((slide) => {
          const hero = slide;

          return (
            <SwiperSlide key={hero.id}>
              <section className="hero-section">
                <div className="container">
                  <div className="hero-content">
                    <p className="hero-eyebrow">
                      {hero.eyebrow}
                    </p>

                    <h1>{hero.title}</h1>

                    <p className="hero-summary">
                      {hero.summary}
                    </p>

                    <div className="hero-btns">
                      <Link
                        className="btn-dark"
                        to={hero.primaryButtonLink}
                      >
                        {hero.primaryButtonText}
                      </Link>

                      <Link
                        className="btn-light"
                        to={hero.secondaryButtonLink}
                      >
                        {hero.secondaryButtonText}
                      </Link>
                    </div>

                    <ul className="hero-benefits">
                      {hero.benefits?.map((item) => (
                        <li key={item.id}>
                          <strong>{item.title}</strong>
                          <span>{item.description}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default HeroSlider;