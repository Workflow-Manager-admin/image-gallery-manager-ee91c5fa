import React from 'react';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

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
        <IconButton
          className="modal-close"
          onClick={onClose}
          aria-label="Close"
          size="small"
          style={{
            position: 'absolute',
            top: 15,
            right: 18,
            background: 'var(--secondary)',
            color: '#fff',
            zIndex: 2
          }}
        >
          <CloseIcon />
        </IconButton>
        <img className="modal-img" src={image.src} alt={image.title} />
        <h2 className="modal-title">{image.title}</h2>
        {image.description && <p className="modal-desc">{image.description}</p>}
      </div>
    </div>
  );
}

export default ImageModal;
