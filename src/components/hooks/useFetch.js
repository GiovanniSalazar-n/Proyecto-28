import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = ({ artistName }) => {
  const [albums, setAlbums] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchAlbums = async () => {
      if (!artistName.trim()) return;

      setIsLoading(true);
      setError(null);

      try {
        const response = await axios.get(
          `/api/v1/json/2/searchalbum.php?s=${artistName}`
        );
        setAlbums(response.data.album );
      } catch (error) {
        setError(error);
      } 
      setIsLoading(false);
    };

    fetchAlbums();
  }, [artistName]);

  return { albums, error, isLoading };
};

export default useFetch;
