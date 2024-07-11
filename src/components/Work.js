import React from 'react';

const RecentWorks = () => {
  return (
    <section className="recent" id="recent">
      <h2 className="heading">Recent <span>Works</span></h2>
      <div className="video-row">
        <div className="video-column">
          <video controls src="../images/4.mp4"></video>
          <h1>video sample 1</h1>
        </div>
        <div className="video-column">
          <video controls src="../images/4.mp4"></video>
          <h1>video sample 1</h1>
        </div>
        <div className="video-column">
          <video controls src="../images/4.mp4"></video>
          <h1>video sample 1</h1>
        </div>
      </div>
      <div className="video-row">
        <div className="video-column">
          <video controls src="../images/4.mp4"></video>
          <h1>video sample 1</h1>
        </div>
        <div className="video-column">
          <video controls src="../images/4.mp4"></video>
          <h1>video sample 1</h1>
        </div>
        <div className="video-column">
          <video controls src="../images/4.mp4"></video>
          <h1>video sample 1</h1>
        </div>
      </div>
    </section>
  );
};

export default RecentWorks;
