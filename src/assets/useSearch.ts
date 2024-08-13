import { useEffect, useState } from "react";
import { DataShape } from "./types";

const useSearch = (url: string) => {
  const [data, setData] = useState<DataShape[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch(url)
      .then(res => {
        if(!res.ok){
          throw new Error("Data not found");
        }
        return res.json();
      })
      .then(data => {
        setData(data.hits)
        setLoading(false)
      })
      .catch(err => {
        setError(err.message)
        setLoading(false)
      })
  }, [url])
  return {data, error, loading};
}
 
export default useSearch;