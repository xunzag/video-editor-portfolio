import React, { useState } from 'react';

const RecentWorks = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const handleCategoryFilter = (category) => {
    setSelectedCategory(category);
  };

  const renderVideos = () => {
    // Replace this with your actual video data and mapping logic based on selectedCategory
    const videos = [
      { src: "../images/4.mp4", title: "Video Sample 1", category: "tv_commercials" },
      { src: "../images/4.mp4", title: "Video Sample 2", category: "music_video" },
      { src: "../images/4.mp4", title: "Video Sample 3", category: "feature_film" },
      { src: "../images/4.mp4", title: "Video Sample 4", category: "documentary" },
    ];

    let filteredVideos = videos;
    if (selectedCategory !== 'all') {
      filteredVideos = videos.filter(video => video.category === selectedCategory);
    }

    return filteredVideos.map((video, index) => (
      <div className="video-column" key={index}>
        <video controls src={video.src}></video>
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
    </section>
  );
};

export default RecentWorks;
