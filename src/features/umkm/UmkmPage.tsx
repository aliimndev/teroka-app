'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { Umkm } from '@/types/umkm';
import { toast } from 'sonner';

// Import komponen-komponen UMKM dari pages directory
import UmkmDetail from '@/pages/umkm/UmkmDetail';

export default function UmkmPage() {
  const params = useParams();
  const [umkm, setUmkm] = useState<Umkm | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUmkm = async () => {
      if (!params?.id) return;

      try {
        setLoading(true);
        const umkmId = Array.isArray(params.id) ? params.id[0] : params.id;
        const response = await fetch(`/api/umkm/${umkmId}`);
        const data = await response.json();

        if (data.success) {
          setUmkm(data.data);
        } else {
          setError(data.message || 'UMKM tidak ditemukan');
          toast.error(data.message || 'UMKM tidak ditemukan');
        }
      } catch {
        setError('Gagal memuat data UMKM');
        toast.error('Gagal memuat data UMKM');
      } finally {
        setLoading(false);
      }
    };

    fetchUmkm();
  }, [params?.id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600 mx-auto mb-4"></div>
          <p className="Text-gray-600">Memuat data UMKM...</p>
        </div>
      </div>
    );
  }

  if (error || !umkm) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">UMKM Tidak Ditemukan</h1>
          <p className="text-gray-600 mb-4">{error || 'UMKM yang Anda cari tidak tersedia.'}</p>
          <button
            onClick={() => window.history.back()}
            className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors"
          >
            Kembali
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <UmkmDetail umkm={umkm} />
    </div>
  );
}