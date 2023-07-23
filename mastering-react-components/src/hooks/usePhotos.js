import { useState, useEffect } from 'react';
import { getTenPhotos } from '../services/photos';

const usePhotos = () => {
  const [photos, setPhotos] = useState();

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const data = await getTenPhotos(); // In this case, assuming we are using a regular fetch (David)
        setPhotos(data);
      } catch (error) {
        console.error('Error:', error); // Handling these errors is necessary (David)
      }
    };

    fetchPhotos();
  }, []);

  return { photos };
};

export default usePhotos;