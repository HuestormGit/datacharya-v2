import Navbar from "../components/Navbar/Navbar";
import HeroSlider from "../components/HeroSlider/HeroSlider";
import PlatformSection from "../components/PlatformSection/PlatformSection";
import Framework from "../components/Framework/Framework";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSlider />
      <PlatformSection />
      <Framework />
    </>
  );
};

export default Home;