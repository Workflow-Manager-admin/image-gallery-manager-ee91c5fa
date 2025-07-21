import React from 'react';

// PUBLIC_INTERFACE
function GalleryList({ images, onImageClick }) {
  /** Displays images in a vertical list with basic details */
  return (
    <div className="gallery-list">
      {images.map(img => (
        <div key={img.id} className="list-item" onClick={() => onImageClick(img)}>
          <img className="list-item-img" src={img.src} alt={img.title} />
          <div className="list-item-info">
            <div className="list-item-title">{img.title}</div>
            <div className="list-item-desc">{img.description}</div>
          </div>
        </div>
      ))}
      {images.length === 0 && (
        <div className="gallery-empty">No images found.</div>
      )}
    </div>
  );
}

export default GalleryList;
