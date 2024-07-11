import React from 'react';

const Contact = () => {
  const handleEmail = () => {
    window.location.href = "mailto:niggaman@gmail.com";
  };

  const handlePhone = () => {
    window.location.href = "tel:+96969696969";
  };

  const handleWhatsApp = () => {
    // Assuming you want to open WhatsApp with a specific number/message
    window.location.href = "https://api.whatsapp.com/send?phone=+96969696969";
  };

  return (
    <section className="contact" id="contact">
      <div className="max-width">
        <div className="contact-content">
          <div className="column right">
            <div className="text">Message me</div>
            <form>
              <div className="input-box">
                <div className="input-field">
                  <input type="text" placeholder="Name" required />
                </div>
                <div className="input-field">
                  <input type="email" placeholder="Email" required />
                </div>
                <div className="input-field">
                  <input type="text" placeholder="Subject" required />
                </div>
                <div className="textarea-field">
                  <textarea cols="30" rows="6" placeholder="Message.." required></textarea>
                </div>
              </div>
              <div className="button-area">
                <button type="submit">Send message</button>
              </div>
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
      </div>
    </section>
  );
};

export default Contact;
