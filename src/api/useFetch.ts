import { useState, useEffect } from 'react';

interface UseFetchResult {
	data: unknown;
}

const useFetch = (url: string): UseFetchResult => {
	const [data, setData] = useState<unknown | null>(null);

	useEffect(() => {
		fetch(url)
			.then(res => {
					if (!res.ok) {
							throw Error('Error fetching users data');
					}
					return res.json();
			})
			.then(data => {
					setData(data);
			})
	}, [url]);

	return { data };
}

export default useFetch;