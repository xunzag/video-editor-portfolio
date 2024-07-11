import React from 'react';
import profileImage from '../images/niggaman.png'; // Adjust the path based on your project structure

const About = () => {
  return (
    <section className="about" id="about">
      <h2 className="heading">About <span>Me</span></h2>
      <div className="about-img">
        <img src={profileImage} alt="Profile" />
        <span className="circle-spin"></span>
      </div>
      <div className="about-content">
        <h3>Pumpkin</h3>
        <p>
          Welcome to my video editing portfolio! I am Rames Waqar, a passionate and creative video editor with a keen eye for detail. With 1 year of experience in the industry, I specialize in transforming raw footage into compelling visual stories that captivate audiences.               
          My expertise lies in video editing, color grading, motion graphics, and visual effects. Whether it's a short film, promotional video, or documentary, I bring a unique blend of technical proficiency and artistic flair to every project.                
          I am dedicated to delivering high-quality content that exceeds expectations. Through a seamless fusion of creativity and technical skill, I strive to bring ideas to life, conveying powerful messages through the art of visual storytelling.               
          Feel free to explore my portfolio and get in touch if you have a project in mind. Let's collaborate to create engaging and impactful videos that leave a lasting impression!
        </p>
      </div>
    </section>
  );
};

export default About;
