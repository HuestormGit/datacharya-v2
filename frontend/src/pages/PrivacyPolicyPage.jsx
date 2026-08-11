import Navbar from "../components/Navbar/Navbar";
import PrivacyPolicy from "../components/PrivacyPolicy/PrivacyPolicy";
import Footer from "../components/Footer/Footer";

const PrivacyPolicyPage = () => {
  return (
    <div className="privacy-policy-page">
      <Navbar />

      <main>
        <PrivacyPolicy />
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicyPage;