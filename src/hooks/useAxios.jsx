import { useState, useEffect } from "react";
import axios from "axios";

export default function useAxios(param) {
  const [response, setResponse] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  axios.defaults.baseURL = `api.edamam.com`;
  const fetchData = async (url) => {
    try {
      setIsLoading(true);
      const res = await axios(url);
      console.log(res.data)
      setResponse(res.data.hits);
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

