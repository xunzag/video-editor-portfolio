import React from 'react';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="heading" id="heading">Contact <span>Me</span></div>
      <div className="max-width">
        <div className="contact-content">
          <div className="column left">
            <div className="text">Get in Touch</div>
            <div className="icons">
              <div className="row">
                <i className="fas fa-user"></i>
                <div className="info">
                  <div className="head">Name</div>
                  <div className="sub-title">Pumpkin Man</div>
                </div>
              </div>
              <div className="row">
                <i className="fas fa-map-marker-alt"></i>
                <div className="info">
                  <div className="head">Address</div>
                  <div className="sub-title">Ranchor Line, Norway</div>
                </div>
              </div>
              <div className="row">
                <i className="fas fa-envelope"></i>
                <div className="info">
                  <div className="head">Email</div>
                  <div className="sub-title">niggaman@gmail.com</div>
                </div>
              </div>
              <div className="row">
                <i className="fas fa-phone-alt"></i>
                <div className="info">
                  <div className="head">Phone Number</div>
                  <div className="sub-title">+96969696969</div>
                </div>
              </div>
            </div>
          </div>
          <div className="column right">
            <div className="text">Message me</div>
            <form action="mailto:niggaman@gmail.com">
              <div className="fields">
                <div className="field name">
                  <input type="text" placeholder="Name" required />
                </div>
                <div className="field email">
                  <input type="email" placeholder="Email" required />
                </div>
              </div>
              <div className="field">
                <input type="text" placeholder="Subject" required />
              </div>
              <div className="field textarea">
                <textarea cols="30" rows="10" placeholder="Message.." required></textarea>
              </div>
              <div className="button-area">
                <button type="submit">Send message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
