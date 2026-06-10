import Navbar from "../components/Navbar/Navbar";
import ApproachHero from "../components/ApproachHero/ApproachHero";
import SageFramework from "../components/SageFramework/SageFramework";
import ApproachPlatforms from "../components/ApproachPlatforms/ApproachPlatforms";
import Footer from "../components/Footer/Footer";

const Approach = () => {
  return (
    <div className="approach-page">
      <Navbar />
      <main>
        <ApproachHero />
        <SageFramework variant="approach" />
        <ApproachPlatforms />
      </main>
      <Footer />
    </div>
  );
};

export default Approach;
