import { useEffect, useState } from 'react';
import { DataShape } from './types';

const useFetch = (url: string) => {
  const [data, setData] = useState<DataShape[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const storedData = localStorage.getItem('apiData');
    const abortFetch = new AbortController();
    const signal = abortFetch.signal;

    if(storedData){
      setData(JSON.parse(storedData));
      setLoading(false);
    }else{
      fetch(url, {signal})
        .then(res => {
          if(!res.ok){
            throw Error("Data not found");
          }
          return res.json();
        })
        .then((data: { hits: DataShape[] }) => {
          setData(data.hits)
          setLoading(false);
          localStorage.setItem('apiData', JSON.stringify(data.hits));
        })
        .catch((err: unknown) => {
          if (err instanceof Error) {
            if (err.name !== 'AbortError') {
              setError(err.message);
            }
          } else {
            setError('An unknown error occurred');
          }
          setLoading(false);
        })
    }
    return () => {
      abortFetch.abort();
    };
  }, [url])
  return{data, error, loading}
}

export default useFetch;