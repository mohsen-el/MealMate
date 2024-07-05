import { useState, useEffect } from "react";
import axios from "axios";

export default function useAxios(url) {
  const [response, setResponse] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  // Set the base URL for the API
  axios.defaults.baseURL = `https://api.edamam.com`;

  const fetchData = async (url) => {
    try {
      setIsLoading(true);
      const res = await axios.get(url, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log('Axios response:', res.data.hits); 
      setResponse(res.data.hits); 
    } catch (err) {
      console.error('Axios error:', err);
      setError(err.message || "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (url) {
      fetchData(url);
    }
  }, [url]);

  return {
    response,
    isLoading,
    error,
    fetchData,
  };
}
