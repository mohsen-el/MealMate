import { useState, useEffect } from "react";
import axios from "axios";

export default function useAxios(param) {
  const [response, setResponse] = useState([]);
  const [isLoading, setIsLoading] = useState([]);
  const [error, setError] = useState("");

  axios.defaults.baseURL = `https://api.edamam.com/doc/open-api/recipe-search-v2.json`;
  const fetchData = async (url) => {
    try {
      setIsLoading(true);
      const res = await axios(url-'/');
      setResponse(res.data.results);
      console.log(res.data)
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData(param);
  }, [param]);
  return {
    response,
    isLoading,
    error,
    fetchData: (url) => fetchData(url),
  };
}

