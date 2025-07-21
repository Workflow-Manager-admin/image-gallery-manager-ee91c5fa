import React from 'react';

// PUBLIC_INTERFACE
function ImageModal({ image, onClose }) {
  /**
   * Modal popout for image detail view
   * @param {{ image: {src, title, description, id}, onClose: () => void }} props
   */
  if (!image) return null;
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()} tabIndex={0}>
        <button className="modal-close" onClick={onClose} aria-label="Close">&times;</button>
        <img className="modal-img" src={image.src} alt={image.title} />
        <h2 className="modal-title">{image.title}</h2>
        {image.description && <p className="modal-desc">{image.description}</p>}
      </div>
    </div>
  );
}

export default ImageModal;
