import React, { useEffect, useState } from 'react';
import VideoSlider from '../components/Videoslider.js'; // Make sure to adjust the path as needed
import sample from "../videos/sample.mp4";

const Home = () => {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const content = "Hi, I'm Rames Waqar";

  useEffect(() => {
    if (index < content.length) {
      setTimeout(() => {
        setText(text + content[index]);
        setIndex(index + 1);
      }, 100);
    }
  }, [index, text, content]);

  const handleWatchClick = () => {
    const videoElement = document.getElementById('sample-video');
    videoElement.scrollIntoView({ behavior: 'smooth' });
    videoElement.play();
  };

  return (
    <section className="home" id="home">
      <div className="slideshow-container">
        <VideoSlider />
      </div>
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
            <button className="btn" onClick={handleWatchClick}>Watch</button>
            <a href="/contact" className="btn">Connect</a>
          </div>
        </div>
        <div className="home-sci">
          <a href="#"><i className='bx bxl-linkedin'></i></a>
          <a href="#"><i className='bx bxl-facebook'></i></a>
          <a href="#"><i className='bx bxl-telegram'></i></a>
        </div>
      </div>
      <div className="video-container">
        <video id="sample-video" autoPlay loop controls>
          <source src={sample} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
};

export default Home;
