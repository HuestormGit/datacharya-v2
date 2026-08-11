import Navbar from "../components/Navbar/Navbar";
import TermsOfUse from "../components/TermsOfUse/TermsOfUse";
import Footer from "../components/Footer/Footer";

const TermsOfUsePage = () => {
  return (
    <div className="terms-of-use-page">
      <Navbar />

      <main>
        <TermsOfUse />
      </main>

      <Footer />
    </div>
  );
};

export default TermsOfUsePage;