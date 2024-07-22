import React from 'react';
import ching from "../images/ching.jpg";

const Contact = () => {
  const handleEmail = () => {
    window.location.href = "mailto:niggaman@gmail.com";
  };

  const handlePhone = () => {
    window.location.href = "tel:+96969696969";
  };

  const handleWhatsApp = () => {
    window.location.href = "https://api.whatsapp.com/send?phone=+96969696969";
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    window.location.href = "mailto:rameswaqar69@gmail.com";
  };

  return (
    <section className="contact" id="contact">
      <div className="header-image">
        <img src={ching} alt="Header Image" />
      </div>
      <div className="contact-content">
        <div className="contact-details">
          <h2>Rames Waqar</h2>
          <p>+92 92929292</p>
          <p>niggaman@gmail.com</p>
          <p>Karachi, Pakistan</p>
        </div>
        <div className="contact-form">
          <h2>Contact Form</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" rows="5" required></textarea>
            </div>
            <button type="submit">Submit</button>
          </form>
          <div className="contact-icons">
            <div className="icon" onClick={handleEmail}>
              <i className="fas fa-envelope"></i>
              <span>Email</span>
            </div>
            <div className="icon" onClick={handlePhone}>
              <i className="fas fa-phone-alt"></i>
              <span>Phone</span>
            </div>
            <div className="icon" onClick={handleWhatsApp}>
              <i className="fab fa-whatsapp"></i>
              <span>WhatsApp</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
