import { useEffect, useState } from 'react';
import type { Book } from '../types/Book';
import type { GeneralBook } from '../types/GeneralBook';

export function useFetchBooks(fileName: string) {
  const [data, setData] = useState<GeneralBook[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let isActive = true;

    async function load() {
      try {
        setLoading(true);

        const res = await fetch(
          `${import.meta.env.BASE_URL}books/${fileName}.json`,
        );

        if (!res.ok) {
          throw new Error(`Failed to load ${fileName} books`);
        }

        const json: Book[] = await res.json();

        if (isActive) {
          setData(json);
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

    void load();

    return () => {
      isActive = false;
    };
  }, [fileName]);

  return { data, loading, error };
}
