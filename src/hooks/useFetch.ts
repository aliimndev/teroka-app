// src/hooks/useFetch.ts
import { useState, useEffect } from 'react';
import umkmData from '@/data/umkm.json';

export interface FetchState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

/**
 * Hook serbaguna:
 * - Tanpa url → pakai data statis dari umkm.json
 * - Dengan url → fetch API
 */
export function useFetch<T>(url?: string): FetchState<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        setError(null);

        let result: T;

        if (url) {
          // Fetch dari API
          const res = await fetch(url);
          if (!res.ok) throw new Error('Gagal memuat data');
          const response = await res.json();

          // Handle response format: { success: boolean, data: T, message: string }
          if (response.success && response.data) {
            result = response.data;
          } else {
            throw new Error(response.message || 'Gagal memuat data');
          }
        } else {
          // Data statis
          result = umkmData as T;
        }

        setData(result);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Terjadi kesalahan');
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [url]); // Re-run jika url berubah

  return { data, loading, error };
}