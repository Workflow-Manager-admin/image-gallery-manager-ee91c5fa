import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import GalleryGrid from './components/GalleryGrid';
import GalleryList from './components/GalleryList';
import ImageModal from './components/ImageModal';
import { filterImages, fetchImages } from './utils/gallery-utils';

/**
 * PUBLIC_INTERFACE
 * Main entrypoint for the Image Gallery App
 * - Manages gallery state, search/filter, view mode, and image modal
 */
function App() {
  const [theme, setTheme] = useState('light');
  const [images, setImages] = useState([]);
  const [search, setSearch] = useState('');
  const [viewMode, setViewMode] = useState('grid'); // or 'list'
  const [modalImage, setModalImage] = useState(null);

  // Theme effect (light only, but infrastructure for theme switching)
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    fetchImages().then(setImages);
  }, []);

  const filteredImages = filterImages(images, search);

  return (
    <div className="App">
      <Navbar
        onSearch={setSearch}
        viewMode={viewMode}
        setViewMode={setViewMode}
        // Could add dark/light theme toggle here in future
      />
      <main className="gallery-main">
        <div className="gallery-container">
          {viewMode === 'grid'
            ? <GalleryGrid images={filteredImages} onImageClick={setModalImage} />
            : <GalleryList images={filteredImages} onImageClick={setModalImage} />
          }
        </div>
      </main>
      <ImageModal image={modalImage} onClose={() => setModalImage(null)} />
    </div>
  );
}

export default App;
