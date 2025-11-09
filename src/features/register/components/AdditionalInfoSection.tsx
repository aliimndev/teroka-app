import { Input } from '@/components/ui/input';
import type { UmkmFormData } from '../types';

interface AdditionalInfoSectionProps {
  formData: UmkmFormData;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function AdditionalInfoSection({ formData, onChange }: AdditionalInfoSectionProps) {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b">
        Informasi Tambahan (Opsional)
      </h2>

      <div className="space-y-4">
        {/* URL Gambar */}
        <div>
          <label htmlFor="image" className="block text-sm font-medium text-gray-700 mb-1">
            URL Foto/Logo UMKM
          </label>
          <Input
            id="image"
            name="image"
            type="url"
            value={formData.image}
            onChange={onChange}
            placeholder="https://example.com/image.jpg"
            className="w-full"
          />
          <p className="mt-1 text-xs text-gray-500">
            Masukkan URL gambar dari internet
          </p>
        </div>

        {/* Owner Name & Tahun Berdiri */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="owner_name" className="block text-sm font-medium text-gray-700 mb-1">
              Nama Pemilik
            </label>
            <Input
              id="owner_name"
              name="owner_name"
              type="text"
              value={formData.owner_name}
              onChange={onChange}
              placeholder="Bu Ani"
              className="w-full"
            />
          </div>

          <div>
            <label htmlFor="established_year" className="block text-sm font-medium text-gray-700 mb-1">
              Tahun Berdiri
            </label>
            <Input
              id="established_year"
              name="established_year"
              type="number"
              min="1900"
              max={new Date().getFullYear()}
              value={formData.established_year}
              onChange={onChange}
              placeholder="2015"
              className="w-full"
            />
          </div>
        </div>

        {/* Jumlah Karyawan */}
        <div>
          <label htmlFor="employee_count" className="block text-sm font-medium text-gray-700 mb-1">
            Jumlah Karyawan
          </label>
          <Input
            id="employee_count"
            name="employee_count"
            type="number"
            min="0"
            value={formData.employee_count}
            onChange={onChange}
            placeholder="5"
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
}
