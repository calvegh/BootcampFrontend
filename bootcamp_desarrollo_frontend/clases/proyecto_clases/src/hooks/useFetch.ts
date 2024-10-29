import { useEffect, useState } from "react";

export function useFetch<T>(url: string): {
  data: T | null;
  loading: boolean;
  error: string;
} {
  function getJWToken() {
    return "adas";
  }
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const token = getJWToken();
  useEffect(() => {
    const fetchData = async () => {
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      try {
        const response = await fetch(url, { headers });
        if (response.ok) {
          const data = await response.json();
          setData(data);
        } else {
          setError(response.statusText);
        }
      } catch (error) {
        setError(error instanceof Error ? error.message : "Error desconocido");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);
  return { loading, data, error };
}
