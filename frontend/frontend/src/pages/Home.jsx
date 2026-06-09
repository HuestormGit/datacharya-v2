import Navbar from "../components/Navbar/Navbar";
import HeroSlider from "../components/HeroSlider/HeroSlider";
import PlatformPillars from "../components/PlatformPillars/PlatformPillars";
import SageFramework from "../components/SageFramework/SageFramework";
import Testimonials from "../components/Testimonials/Testimonials";
import Advisory from "../components/Advisory/Advisory";
import Insights from "../components/Insights/Insights";
import CTA from "../components/CTA/CTA";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSlider />
      <PlatformPillars />
      <SageFramework />
      <Testimonials />
      <Advisory />
      <Insights />
      <CTA />
      <Footer />
    </>
  );
};

export default Home;