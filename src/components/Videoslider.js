import React, { useState, useRef, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import sample1 from "../videos/sample1.mp4";
import sample2 from "../videos/sample2.mp4";
import sample3 from "../videos/sample3.mp4";
import "../VideoSlider.css"; // Ensure you include your CSS file

const videos = [sample1, sample2, sample3]; // Array of video sources

const VideoSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRefs = useRef(videos.map(() => React.createRef())); // Initialize refs correctly

  // Animation settings
  const [props, set] = useSpring(() => ({
    opacity: 1,
    transform: 'translateX(0%)',
    config: { duration: 300 } // Adjust the duration for smooth transitions
  }));

  useEffect(() => {
    // Play the video when the slide is active
    const currentVideo = videoRefs.current[currentIndex]?.current;
    if (currentVideo) {
      currentVideo.play().catch(() => {
        console.log("Autoplay blocked or video cannot be played");
      });
    }
    // Ensure other videos are paused
    videoRefs.current.forEach((ref, index) => {
      if (index !== currentIndex) {
        ref.current?.pause();
      }
    });
  }, [currentIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, [set]);

  return (
    <div className="video-slider-container">
      <div className="video-slider">
        {videos.map((video, index) => (
          <animated.div
            key={index}
            style={{ ...props, display: currentIndex === index ? 'block' : 'none' }}
            className="slide"
          >
            <video ref={videoRefs.current[index]} className="slider-video" loop muted>
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </animated.div>
        ))}
      </div>
      <button
        className="slider-control left"
        onClick={() => setCurrentIndex((currentIndex - 1 + videos.length) % videos.length)}
      >
        ❮
      </button>
      <button
        className="slider-control right"
        onClick={() => setCurrentIndex((currentIndex + 1) % videos.length)}
      >
        ❯
      </button>
    </div>
  );
};

export default VideoSlider;
