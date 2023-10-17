import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ImageGallery.css';
const ImageGallery = () => {
  const [images, setImages] = useState([]);
  const [displayedImages, setDisplayedImages] = useState([]);
  const [loadCount, setLoadCount] = useState(10);

  useEffect(() => {
    axios
      .get('https://picsum.photos/v2/list?page=2&limit=50')
      .then((response) => {
        setImages(response.data);
      })
      .catch((error) => {
        console.error('Error fetching images:', error);
      });
  }, []);

  useEffect(() => {
    setDisplayedImages(images.slice(0, loadCount));
  }, [images, loadCount]);

  const handleLoadMore = () => {
    setLoadCount(loadCount + 10);
  };

  return (
    <React.Fragment>
      <div className="image-grid">
        {displayedImages.map((image, index) => (
          <div key={image.id} className="image-item">
            <img src={image.download_url} alt={image.author} className='img' />
          </div>
        ))}
      </div>
      <button onClick={handleLoadMore} className="load-more-button">
        Load More
      </button>
    </React.Fragment>
  );
};

export default ImageGallery;
