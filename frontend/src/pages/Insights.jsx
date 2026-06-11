import Navbar from "../components/Navbar/Navbar";
import InsightsHero from "../components/InsightsHero/InsightsHero";
import InsightsSection from "../components/Insights/Insights";
import Footer from "../components/Footer/Footer";

const Insights = () => {
  return (
    <div className="insights-page">
      <Navbar />
      <main>
        <InsightsHero />
         <InsightsSection variant="page" />
        {/* <InsightsSection variant="page" /> */}
        {/* <Insights variant="page" /> */}
      </main>
      <Footer />
    </div>
  );
};

export default Insights;
