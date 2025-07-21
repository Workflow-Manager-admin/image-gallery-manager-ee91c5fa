import React from 'react';
import Masonry from 'react-masonry-css';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import ImageIcon from '@mui/icons-material/Image';

// PUBLIC_INTERFACE
function GalleryGrid({ images, onImageClick }) {
  /**
   * Pinterest-style masonry layout using react-masonry-css & Material Icons.
   * Modern card styling, icons for better visual feedback.
   */
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
  };

  return (
    <div className="gallery-masonry-wrapper">
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="gallery-masonry"
        columnClassName="gallery-masonry-col"
      >
        {images.map(img => (
          <div key={img.id} className="gallery-masonry-item" tabIndex={0} onClick={() => onImageClick(img)}>
            <div className="gallery-masonry-img-container">
              {img.src ? (
                <img src={img.src} alt={img.title} className="gallery-masonry-img" />
              ) : (
                <div className="gallery-masonry-placeholder">
                  <ImageIcon fontSize="large" color="disabled" />
                </div>
              )}
            </div>
            <div className="gallery-masonry-meta">
              <span className="gallery-masonry-title">{img.title}</span>
              <span className="gallery-masonry-actions">
                <FavoriteBorderIcon className="icon-action" aria-label="Like" tabIndex={-1} />
                <InfoOutlinedIcon className="icon-action" aria-label="Details" tabIndex={-1} />
              </span>
            </div>
          </div>
        ))}
        {images.length === 0 && (
          <div className="gallery-empty">
            <InfoOutlinedIcon fontSize="medium" color="disabled" style={{ verticalAlign: 'middle', marginRight: '0.4em' }} />
            No images found.
          </div>
        )}
      </Masonry>
    </div>
  );
}

export default GalleryGrid;
