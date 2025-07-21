import React, { useRef } from 'react';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import AppsIcon from '@mui/icons-material/Apps';
import ViewListIcon from '@mui/icons-material/ViewList';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

// PUBLIC_INTERFACE
function Navbar({ onSearch, viewMode, setViewMode, onUploadImage }) {
  /** A modern navigation bar for the gallery app, enables user image uploads. */
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
        <PhotoLibraryIcon className="navbar-logo" fontSize="large" style={{ marginRight: '0.35rem', color: 'var(--primary)' }} />
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
          ><AppsIcon /></button>
          <button
            className={`view-btn ${viewMode === 'list' ? 'active' : ''}`}
            aria-label="List view"
            onClick={() => setViewMode('list')}
          ><ViewListIcon /></button>
        </div>
      </div>
      <div className="navbar-actions">
        <button
          className="upload-btn"
          title="Upload a new image"
          onClick={handleUploadBtnClick}
          tabIndex={0}
          style={{ opacity: 1, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.38em' }}
        >
          <CloudUploadIcon fontSize="small" style={{ marginRight: '0.08em' }} />
          Upload
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
