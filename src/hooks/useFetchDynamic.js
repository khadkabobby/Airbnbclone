import { useEffect, useState } from "react";
import { fetchDataFromDynamicApi } from "../utils/api/dynamicapi";

const useFetchDynamic = (url, params) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading("loading...");
    setData(null);
    setError(null);

    fetchDataFromDynamicApi(url, params)
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
export default useFetchDynamic;
