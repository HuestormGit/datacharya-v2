import "./ContactForm.scss";

const ContactForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <section className="contact-form-section">
      <div className="container">
        <div className="contact-form-layout">
          <div className="contact-location">
            <h2>Location</h2>
            <p>
              Add your office address, business location, or preferred meeting
              details here. Our team will respond with the right next step.
            </p>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <label htmlFor="contact-name">Your Name</label>
            <input id="contact-name" name="name" type="text" required />

            <label htmlFor="contact-company">Your Company Name</label>
            <input id="contact-company" name="company" type="text" required />

            <label htmlFor="contact-designation">Your Designation</label>
            <input id="contact-designation" name="designation" type="text" required />

            <label htmlFor="contact-problem">
              State your current business problem briefly
            </label>
            <textarea id="contact-problem" name="problem" rows="5" required />

            <button type="submit">Submit&nbsp; →</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
