import AboutHero from "../components/AboutHero/AboutHero";
import AboutVoices from "../components/AboutVoices/AboutVoices";
import Footer from "../components/Footer/Footer";
import Genesis from "../components/Genesis/Genesis";
import Navbar from "../components/Navbar/Navbar";
import WhoWeServe from "../components/WhoWeServe/WhoWeServe";

const About = () => {
  return (
    <div className="about-page">
      <Navbar />
      <AboutHero />
      <Genesis />
      <WhoWeServe />
      <AboutVoices />
      <Footer />
    </div>
  );
};

export default About;
