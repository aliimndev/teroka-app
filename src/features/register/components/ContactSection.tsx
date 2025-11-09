import { Input } from '@/components/ui/input';
import type { UmkmFormData } from '../types';

interface ContactSectionProps {
  formData: UmkmFormData;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function ContactSection({ formData, onChange }: ContactSectionProps) {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b">
        Informasi Kontak
      </h2>

      <div className="space-y-4">
        {/* Nomor Telepon */}
        <div>
          <label htmlFor="contact" className="block text-sm font-medium text-gray-700 mb-1">
            Nomor Telepon/WhatsApp <span className="text-red-500">*</span>
          </label>
          <Input
            id="contact"
            name="contact"
            type="tel"
            required
            value={formData.contact}
            onChange={onChange}
            placeholder="+62812345678"
            className="w-full"
          />
          <p className="mt-1 text-xs text-gray-500">
            Format: +62 diikuti nomor telepon
          </p>
        </div>

        {/* Jam Operasional */}
        <div>
          <label htmlFor="operating_hours" className="block text-sm font-medium text-gray-700 mb-1">
            Jam Operasional <span className="text-red-500">*</span>
          </label>
          <Input
            id="operating_hours"
            name="operating_hours"
            type="text"
            required
            value={formData.operating_hours}
            onChange={onChange}
            placeholder="08:00-21:00"
            className="w-full"
          />
          <p className="mt-1 text-xs text-gray-500">
            Contoh: 08:00-21:00 atau Senin-Sabtu 09:00-18:00
          </p>
        </div>
      </div>
    </div>
  );
}
