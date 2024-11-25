import { useState, useEffect } from "react";

interface UseFetchResult<T> {
  data: T | null;
}

function useFetch<T>(url: string): UseFetchResult<T> {
  const [data, setData] = useState<T | null>(null);

	const fetchData = async () => {
		const response = await fetch(url);
		if (!response.ok) {
			throw new Error('Error fetching data');
		}
		const result = await response.json();
		setData(result);
	};

	fetchData();

  return { data };
}

export default useFetch;
