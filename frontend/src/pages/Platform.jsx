import Navbar from "../components/Navbar/Navbar";
import PlatformHero from "../components/PlatformHero/PlatformHero";
import PlatformPillars from "../components/PlatformPillars/PlatformPillars";
import Footer from "../components/Footer/Footer";

const Platform = () => {
  return (
    <div className="platform-page">
      <Navbar />
      <main>
        <PlatformHero />
        <PlatformPillars variant="ecosystem" />
      </main>
      <Footer />
    </div>
  );
};

export default Platform;
