import React from 'react';

// PUBLIC_INTERFACE
function GalleryGrid({ images, onImageClick }) {
  /** Displays images in a responsive grid view */
  return (
    <div className="gallery-grid">
      {images.map(img => (
        <div key={img.id} className="gallery-item" onClick={() => onImageClick(img)}>
          <img src={img.src} alt={img.title} />
          <div className="gallery-item-title">{img.title}</div>
        </div>
      ))}
      {images.length === 0 && (
        <div className="gallery-empty">No images found.</div>
      )}
    </div>
  );
}

export default GalleryGrid;
