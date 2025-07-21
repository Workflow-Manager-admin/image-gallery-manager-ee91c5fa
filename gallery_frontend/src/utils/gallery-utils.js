// Utility module for gallery data, filtering, and future API hooks

// PUBLIC_INTERFACE
export function filterImages(images, search) {
  if (!search) return images;
  const lower = search.toLowerCase();
  return images.filter(img =>
    img.title.toLowerCase().includes(lower) ||
    (img.description && img.description.toLowerCase().includes(lower))
  );
}

// PUBLIC_INTERFACE
export function fetchImages() {
  // Placeholder function. Replace with real API call in future.
  // Example: const apiUrl = process.env.REACT_APP_GALLERY_API_URL;
  return Promise.resolve([
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=500&q=80',
      title: 'Desert View',
      description: 'A beautiful desert at sunset'
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=500&q=80',
      title: 'Mountain Lake',
      description: 'Alpine lake surrounded by mountains'
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1468449032589-876ed4b3edbc?auto=format&fit=crop&w=500&q=80',
      title: 'Sea Breeze',
      description: 'Waves crashing onto shore'
    }
  ]);
}
