import { useState, useEffect } from 'react';

export function useFetchData(link) {
    const url = link;
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`API Error: ${response.status}`);
                }
                const result = await response.json();
                setData(result);
            } catch (err) {
                setError(err.message);
                console.error('Fetch error:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url]);

    return { data, loading, error };
}
