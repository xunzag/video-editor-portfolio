import React from 'react';
import profileImage from '../images/niggaman.png'; // Adjust the path based on your project structure
import { useEffect, useState } from 'react';

const About = () => {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const content = "Rames Waqar";


  useEffect(() => {
    if (index < content.length) {
      setTimeout(() => {
        setText(text + content[index]);
        setIndex(index + 1);
      }, 100);
    }
  }, [index, text, content]);

  return (
    <section className="about" id="about">
      <h2>{text}</h2>
      <div className="about-img">
        <div className="new-design">
          <img src={profileImage} alt="Profile" />
        </div>
      </div>
      <div className="about-content">
        <p>
          Welcome to my video editing portfolio! I am a passionate and creative video editor with a keen eye for detail. With 1 year of experience in the industry, I specialize in transforming raw footage into compelling visual stories that captivate audiences. My expertise lies in video editing, color grading, motion graphics, and visual effects. Whether it's a short film, promotional video, or documentary, I bring a unique blend of technical proficiency and artistic flair to every project. I am dedicated to delivering high-quality content that exceeds expectations. Through a seamless fusion of creativity and technical skill, I strive to bring ideas to life, conveying powerful messages through the art of visual storytelling. Feel free to explore my portfolio and get in touch if you have a project in mind. Let's collaborate to create engaging and impactful videos that leave a lasting impression!
        </p>
      </div>
      <div className="services">
        <h3>What I Do</h3>
        <div className="services-container">
          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-film"></i> {/* Font Awesome icon */}
            </div>
            <h4>Video Editing</h4>
            <p>I excel in transforming raw footage into polished, engaging videos.</p>
          </div>
          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-tv"></i> {/* Font Awesome icon */}
            </div>
            <h4>TV Commercials Editing</h4>
            <p>I specialize in crafting impactful commercials that resonate with audiences.</p>
          </div>
          <div className="service-card">
            <div className="service-icon">
              <i className="fab fa-instagram"></i> {/* Font Awesome icon */}
            </div>
            <h4>Instagram Reels Editing</h4>
            <p>I create compelling Instagram Reels that enhance brand visibility.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
