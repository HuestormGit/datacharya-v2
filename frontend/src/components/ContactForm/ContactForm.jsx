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
            <h2 className="H240px">Location</h2>
            <p className="Paragrapha16">
              Address<br/>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sapien quam, pellentesque et dolor vitae, tincidunt dictum turpis.
            </p>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <label htmlFor="contact-name" className="paragraph18px">Your Name</label>
            <input id="contact-name" name="name" type="text" required />

            <label htmlFor="contact-company" className="paragraph18px">Your Company Name</label>
            <input id="contact-company" name="company" type="text" required />

            <label htmlFor="contact-designation" className="paragraph18px">Your Designation</label>
            <input id="contact-designation" name="designation" type="text" required />

            <label htmlFor="contact-problem" className="paragraph18px">
              State your current business problem briefly
            </label>
            <textarea id="contact-problem" name="problem" rows="5" required />

            <button type="submit" className="myButton">Submit&nbsp; →</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
