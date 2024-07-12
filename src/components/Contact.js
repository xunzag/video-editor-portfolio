import React from 'react';
import sample from "../videos/sample.mp4"

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

  return (
    <section className="contact" id="contact">
      <div className="contact-content">
        <div className="video-container">
          <video autoPlay loop controls width="100%" height="100%">
            <source src={sample} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="contact-details">
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
