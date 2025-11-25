import { useState, useEffect } from 'react';
import type { GeneralBook } from '../types/GeneralBook';

export function useFetchAllBooks() {
  const [data, setData] = useState<GeneralBook[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let isActive = true;

    async function load() {
      try {
        setLoading(true);

        const [audioRes, kindleRes, paperRes] = await Promise.all([
          fetch(`${import.meta.env.BASE_URL}books/audiobook.json`),
          fetch(`${import.meta.env.BASE_URL}books/kindle.json`),
          fetch(`${import.meta.env.BASE_URL}books/paperback.json`),
        ]);

        if (!audioRes.ok || !kindleRes.ok || !paperRes.ok) {
          throw new Error('One of the JSON files did not load');
        }

        const [audio, kindle, paper] = await Promise.all([
          audioRes.json(),
          kindleRes.json(),
          paperRes.json(),
        ]);

        if (isActive) {
          setData([...audio, ...kindle, ...paper]);
        }
      } catch (err) {
        if (isActive) {
          setError(err instanceof Error ? err : new Error(String(err)));
        }
      } finally {
        if (isActive) {
          setLoading(false);
        }
      }
    }

    load();

    return () => {
      isActive = false;
    };
  }, []);

  return { data, loading, error };
}
