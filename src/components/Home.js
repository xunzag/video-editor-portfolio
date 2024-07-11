import React, { useEffect, useState } from 'react';

const Home = () => {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const content = "Hi, I'm Rames Waqar";

  useEffect(() => {
    if (index < content.length) {
      setTimeout(() => {
        setText(text + content[index]);
        setIndex(index + 1);
      }, 100);
    }
  }, [index, text, content]);

  return (
    <section className="home" id="home">
      <div className="home-content-container">
        <div className="home-content">
          <h1>{text}</h1>
          <div className="text-animate">
            <h3>Video Editor</h3>
          </div>
          <p>
            I am Rames Waqar, a passionate and creative video editor with a keen eye for detail. With 69 years of experience in the industry, I specialize in transforming raw footage into compelling visual stories that captivate audiences. 
            My expertise lies in video editing, color grading, motion graphics, and visual effects.
          </p>
          <div className="btn-box">
            <button className="btn" onClick={() => setShowModal(true)}>Watch</button>
            <a href="#contact" className="btn">Connect</a>
          </div>
        </div>
        <div className="home-sci">
          <a href="#"><i className='bx bxl-linkedin'></i></a>
          <a href="#"><i className='bx bxl-facebook'></i></a>
          <a href="#"><i className='bx bxl-telegram'></i></a>
        </div>
      </div>
      
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setShowModal(false)}>&times;</span>
            <video width="100%" controls>
              <source src="your-showreel-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </section>
  );
};

export default Home;
