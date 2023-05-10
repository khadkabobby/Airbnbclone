import { useEffect, useState } from "react";
import { fetchDataFromStaticApi } from "../utils/api/staticapi";

const useFetchStatic = (url, params) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading("loading...");
    setData(null);
    setError(null);

    fetchDataFromStaticApi(url, params)
      .then((res) => {
        setLoading(false);
        setData(res);
      })
      .catch((error) => {
        setLoading(false);
        setError("something went wrong");
      });
  }, [url]);
  return { data, loading, error };
};
export default useFetchStatic;
