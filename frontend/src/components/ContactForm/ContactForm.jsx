import { useState } from "react";
import "./ContactForm.scss";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    designation: "",
    problem: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

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

      if (response.ok) {
        alert("Form submitted successfully!");

        setFormData({
          name: "",
          company: "",
          designation: "",
          problem: "",
        });
      } else {
        alert("Something went wrong.");
      }
    } catch (err) {
      console.error(err);
      alert("Server Error");
    }
  };

  return (
    <section className="contact-form-section">
      <div className="container">
        <div className="contact-form-layout">

          <div className="contact-location">
            <h2 className="H240px">Location</h2>

            <p className="Paragrapha16">
              Address
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
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

            <label>
              State your current business problem briefly
            </label>

            <textarea
              rows="5"
              name="problem"
              value={formData.problem}
              onChange={handleChange}
              required
            />

            <button type="submit" className="myButton">
              Submit →
            </button>

          </form>

        </div>
      </div>
    </section>
  );
};

export default ContactForm;