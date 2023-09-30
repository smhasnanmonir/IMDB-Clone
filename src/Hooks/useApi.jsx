import { useEffect, useState } from "react";

const useApi = (url) => {
  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setDatas(data);
        setLoading(false);
      });
  }, [url]);
  return { datas, loading };
};

export default useApi;
