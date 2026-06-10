import Navbar from "../components/Navbar/Navbar";
import ApproachHero from "../components/ApproachHero/ApproachHero";
import ApproachSage from "../components/ApproachSage/ApproachSage";
import ApproachPlatforms from "../components/ApproachPlatforms/ApproachPlatforms";
import Footer from "../components/Footer/Footer";

const Approach = () => {
  return (
    <div className="approach-page">
      <Navbar />
      <main>
        <ApproachHero />
        <ApproachSage />
        <ApproachPlatforms />
      </main>
      <Footer />
    </div>
  );
};

export default Approach;
