import { useEffect, useState } from "react";

export const useFetch = <TArgs extends Record<string, any>>(
  fetchFn: (args?: TArgs) => Promise<any>,
  args?: TArgs
) => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState<any>(null);

  const useFetchDeps = args ? Object.values(args) : [];

  useEffect(() => {
    setLoading(true);

    const fetchData = async () => {
      try {
        const response = await fetchFn(args);
        const result = await response.json();
        setResult(result);
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, useFetchDeps);

  return [result, loading, error];
};
