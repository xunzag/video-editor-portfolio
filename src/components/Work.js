import React, { useState } from 'react';
import sample1 from "../videos/sample1.mp4";
import sample2 from "../videos/sample2.mp4";
import sample3 from "../videos/sample3.mp4";

const RecentWorks = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleCategoryFilter = (category) => {
    setSelectedCategory(category);
  };

  const handleVideoClick = (videoSrc) => {
    setSelectedVideo(videoSrc);
  };

  const handleCloseModal = () => {
    setSelectedVideo(null);
  };

  const renderVideos = () => {
    const videos = [
      { src: sample1, title: "Video Sample 1", category: "tv_commercials" },
      { src: sample2, title: "Video Sample 2", category: "music_video" },
      { src: sample3, title: "Video Sample 3", category: "feature_film" },
      { src: sample1, title: "Video Sample 4", category: "documentary" },
    ];

    let filteredVideos = videos;
    if (selectedCategory !== 'all') {
      filteredVideos = videos.filter(video => video.category === selectedCategory);
    }

    return filteredVideos.map((video, index) => (
      <div className="video-column" key={index}>
        <div className="video-item-container" onClick={() => handleVideoClick(video.src)}>
          <video className="video-item" src={video.src} muted></video>
        </div>
        <h1>{video.title}</h1>
      </div>
    ));
  };

  return (
    <section className="recent" id="recent">
      <h2 className="heading">Recent <span>Works</span></h2>
      <div className="category-buttons">
        <button className={selectedCategory === 'all' ? 'active' : ''} onClick={() => handleCategoryFilter('all')}>All</button>
        <button className={selectedCategory === 'tv_commercials' ? 'active' : ''} onClick={() => handleCategoryFilter('tv_commercials')}>TV Commercials</button>
        <button className={selectedCategory === 'music_video' ? 'active' : ''} onClick={() => handleCategoryFilter('music_video')}>Music Video</button>
        <button className={selectedCategory === 'feature_film' ? 'active' : ''} onClick={() => handleCategoryFilter('feature_film')}>Feature Film</button>
        <button className={selectedCategory === 'documentary' ? 'active' : ''} onClick={() => handleCategoryFilter('documentary')}>Documentary</button>
      </div>
      <div className="video-row">
        {renderVideos()}
      </div>
      {selectedVideo && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content">
            <video controls src={selectedVideo} className="modal-video"></video>
          </div>
        </div>
      )}
    </section>
  );
};

export default RecentWorks;
