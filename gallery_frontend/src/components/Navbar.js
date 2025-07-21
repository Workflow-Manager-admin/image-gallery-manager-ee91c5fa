import React from 'react';

// PUBLIC_INTERFACE
function Navbar({ onSearch, viewMode, setViewMode }) {
  /** A modern navigation bar for the gallery app. */
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
        <button className="upload-btn" disabled={true} title="Image upload coming soon!">＋ Upload</button>
      </div>
    </nav>
  );
}

export default Navbar;
