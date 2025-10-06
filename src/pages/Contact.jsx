import "./Contact.css";

const Contact = () => {
  return (
    <section className="page">
      <h1 className="page-title">Contact</h1>
      <p className="page-text">Have questions? Reach us via the form below.</p>
      <form className="form" onSubmit={(e) => e.preventDefault()}>
        <div className="form-field">
          <label htmlFor="name" className="form-label">Name</label>
          <input id="name" type="text" className="form-input" />
        </div>
        <div className="form-field">
          <label htmlFor="email" className="form-label">Email</label>
          <input id="email" type="email" className="form-input" />
        </div>
        <div className="form-field">
          <label htmlFor="message" className="form-label">Message</label>
          <textarea id="message" rows={4} className="form-textarea" />
        </div>
        <button type="submit" className="button primary">Send</button>
      </form>
    </section>
  );
};

export default Contact;
