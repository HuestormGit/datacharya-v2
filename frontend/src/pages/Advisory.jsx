import Navbar from "../components/Navbar/Navbar";
import AdvisoryHero from "../components/AdvisoryHero/AdvisoryHero";
import Advisory from "../components/Advisory/Advisory";
import AdvisoryJourney from "../components/AdvisoryJourney/AdvisoryJourney";
import Footer from "../components/Footer/Footer";

const AdvisoryPage = () => {
  return (
    <div className="advisory-page">
      <Navbar />
      <main>
        <AdvisoryHero />
        <Advisory variant="cxo" />
        <AdvisoryJourney />
      </main>
      <Footer />
    </div>
  );
};

export default AdvisoryPage;
