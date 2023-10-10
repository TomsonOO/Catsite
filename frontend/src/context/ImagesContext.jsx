import { createContext, useState, useEffect } from "react";
import axios from 'axios';

const ImagesContext = createContext();

export const ImagesProvider = ({ children }) => {
  const [imagesVertical, setImagesVertical] = useState([]);
  const [imagesHorizontal, setImagesHorizontal] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      // Adjust the URL based on your Django backend endpoint
      const apiUrl = 'http://localhost:8000/aws/list-public-images/';
      const response = await axios.get(apiUrl);

      // Assuming the backend returns a structure like { vertical: [...], horizontal: [...] }
      setImagesVertical(response.data.vertical);
      setImagesHorizontal(response.data.horizontal);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching image URLs:", error);
    }
  };

  return (
    <ImagesContext.Provider
      value={{
        imagesVertical,
        imagesHorizontal,
        fetchImages,
        isLoading
      }}
    >
      {children}
    </ImagesContext.Provider>
  );
}

export default ImagesContext;
