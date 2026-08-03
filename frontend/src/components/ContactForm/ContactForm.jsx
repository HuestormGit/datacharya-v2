import { useState } from "react";
import "./ContactForm.scss";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    designation: "",
    problem: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Prevent multiple clicks
    if (loading) return;

    setLoading(true);

    try {
      const response = await fetch(
        "https://smiling-garden-31c6e2badd.strapiapp.com/api/contacts",
        // "http://localhost:1337/api/contacts",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            data: formData,
          }),
        }
      );

      const result = await response.json();

      console.log(result);

      if (!response.ok) {
        throw new Error(result.error?.message || "Something went wrong");
      }

      alert("Thank you. Your request has been received. We will review the context and respond within two business days.");

      setFormData({
        name: "",
        company: "",
        designation: "",
        problem: "",
      });
    } catch (err) {
      console.error(err);
      alert(err.message || "Server Error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact-form-section">
      <div className="container">
        <div className="contact-form-layout">
          <div className="contact-location">
            <h2 className="H240px">Get in Touch</h2>
            <p className="paragraph18px"><i className="fa-regular fa-envelope"></i> <a href="mailto:balaji.aravamuthan@datacharya.ai" className="text-black px-2">balaji.aravamuthan@datacharya.ai</a></p>
            <p className="paragraph18px"> <i class="fa fa-phone" aria-hidden="true"></i> <a href="tel:7506931747" className="text-black px-2">+91 7506931747</a></p>

          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <label>Your Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <label>Your Company Name</label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              required
            />

            <label>Your Designation</label>
            <input
              type="text"
              name="designation"
              value={formData.designation}
              onChange={handleChange}
              required
            />

            <label>State your current business problem briefly</label>

            <textarea
              rows="5"
              name="problem"
              value={formData.problem}
              onChange={handleChange}
              required
            />

            <button
              type="submit"
              className="myButton"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit →"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;