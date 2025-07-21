import React, { useRef } from 'react';

// PUBLIC_INTERFACE
function Navbar({ onSearch, viewMode, setViewMode, onUploadImage }) {
  /** A modern navigation bar for the gallery app, now enables user image uploads. */
  const fileInputRef = useRef(null);

  const handleUploadBtnClick = () => {
    // Programmatically open the hidden file input when upload button is clicked
    if (fileInputRef.current) fileInputRef.current.value = null; // Reset input
    fileInputRef.current?.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;
    // Only accept image files
    if (!file.type.startsWith('image/')) {
      alert("Only image files are allowed.");
      return;
    }
    const reader = new window.FileReader();
    reader.onload = (ev) => {
      // Compose a minimal image object; Title from file name
      onUploadImage && onUploadImage({
        id: `user-${Date.now()}`,
        src: ev.target.result,
        title: file.name.replace(/\.[^.]+$/, ''),
        description: '' // User can edit in future extension
      });
    };
    reader.readAsDataURL(file);
  };

  return (
    <nav className="navbar">
      <div className="navbar-title">
        <span className="navbar-logo" role="img" aria-label="gallery">🖼️</span>
        <span>Gallery</span>
      </div>
      <div className="navbar-search">
        <input
          className="search-input"
          type="search"
          placeholder="Search galleries…"
          onChange={e => onSearch(e.target.value)}
          aria-label="Search images"
        />
        <div className="view-toggle">
          <button
            className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`}
            aria-label="Grid view"
            onClick={() => setViewMode('grid')}
          >▦</button>
          <button
            className={`view-btn ${viewMode === 'list' ? 'active' : ''}`}
            aria-label="List view"
            onClick={() => setViewMode('list')}
          >≡</button>
        </div>
      </div>
      <div className="navbar-actions">
        <button
          className="upload-btn"
          title="Upload a new image"
          onClick={handleUploadBtnClick}
          tabIndex={0}
          style={{ opacity: 1, cursor: 'pointer' }}
        >
          ＋ Upload
        </button>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          style={{ display: 'none' }}
          onChange={handleFileChange}
          aria-label="Upload image"
          tabIndex={-1}
        />
      </div>
    </nav>
  );
}

export default Navbar;
