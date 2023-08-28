// useFetch is function not a component !

import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  async function getData() {
    setLoading(true);
    const res = await fetch(url);
    const data = await res.json();
    setData(data);
    setLoading(false);
  }
  useEffect(() => {
    getData();
  }, []);
  return { data, loading };
};

export default useFetch;
