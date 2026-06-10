import ContactUsHero from "../components/ContactUsHero/ContactUsHero";
import ContactForm from "../components/ContactForm/ContactForm";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const ContactUs = () => {
  return (
    <div className="contact-page">
      <Navbar />
      <main>
        <ContactUsHero />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default ContactUs;
