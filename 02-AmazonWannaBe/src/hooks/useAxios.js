import { data } from "autoprefixer";
import axios from "axios";
import { useEffect, useState } from "react";

export const useAxios = (url, options = { method: "get", data: null }) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios({ url, ...options });
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const startFetch = async () => {
      fetchData();
    };
    startFetch();
  }, [url, options.method, options.data]);

  return { data, error, loading };
};

export default useAxios;
