import React, { useState } from 'react';
import styles from './ProductGallery.module.css';
import BASE_URL from "../config";

export const ProductGallery = ({images}) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  const handleImageClick = () => {
    setIsZoomed(true);
  };

  const handleCloseZoom = () => {
    setIsZoomed(false);
  };

  const handlePrevImage = () => {
    setSelectedImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setSelectedImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      handleCloseZoom();
    } else if (e.key === 'ArrowLeft') {
      handlePrevImage();
    } else if (e.key === 'ArrowRight') {
      handleNextImage();
    }
  };

  return (
    <div className={styles.galleryWrapper}>
      <div className={styles.gallery}>
        <img
          src={BASE_URL + images[selectedImage]}
          alt={`Product view ${selectedImage + 1}`}
          className={styles.productImage}
          onClick={handleImageClick}
          onKeyDown={(e) => e.key === 'Enter' && handleImageClick()}
          tabIndex={0}
          role="button"
          aria-label={`View larger image ${selectedImage + 1}`}
        />
      </div>

      {isZoomed && (
        <div
          className={styles.zoomContainer}
          role="dialog"
          aria-label="Zoomed product image"
          onKeyDown={handleKeyDown}
        >
          <button
            className={styles.closeButton}
            onClick={handleCloseZoom}
            aria-label="Close zoomed view"
          >
            ×
          </button>
          <button
            className={`${styles.navigationButton} ${styles.prevButton}`}
            onClick={handlePrevImage}
            aria-label="Previous image"
          >
            ‹
          </button>
          <img
            src={BASE_URL + images[selectedImage]}
            alt={`Large product view ${selectedImage + 1}`}
            className={styles.zoomedImage}
          />
          <button
            className={`${styles.navigationButton} ${styles.nextButton}`}
            onClick={handleNextImage}
            aria-label="Next image"
          >
            ›
          </button>
        </div>
      )}
    </div>
  );
};