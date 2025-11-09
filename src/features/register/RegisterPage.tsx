'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Container } from '@/components/ui/container';
import { toast } from 'sonner';
import { BasicInfoSection } from './components/BasicInfoSection';
import { LocationSection } from './components/LocationSection';
import { ContactSection } from './components/ContactSection';
import { AdditionalInfoSection } from './components/AdditionalInfoSection';
import { FormActions } from './components/FormActions';
import { ImportantNotes } from './components/ImportantNotes';
import { initialFormData, type UmkmFormData } from './types';

export default function RegisterPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<UmkmFormData>(initialFormData);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Prepare data for submission
      const dataToSubmit = {
        ...formData,
        established_year: formData.established_year ? parseInt(formData.established_year) : null,
        employee_count: formData.employee_count ? parseInt(formData.employee_count) : 0,
      };

      const response = await fetch('/api/umkm', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSubmit),
      });

      const result = await response.json();

      if (result.success) {
        toast.success(result.message);
        // Reset form
        setFormData(initialFormData);
        // Redirect to search page after 2 seconds
        setTimeout(() => {
          router.push('/search');
        }, 2000);
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Terjadi kesalahan. Silakan coba lagi.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white py-12">
      <Container>
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold text-gray-900 mb-3">
              Daftarkan UMKM Anda
            </h1>
            <p className="text-lg text-gray-600">
              Bergabunglah dengan Teroka dan tingkatkan visibilitas bisnis Anda
            </p>
          </div>

          {/* Form Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <BasicInfoSection formData={formData} onChange={handleChange} />
              <LocationSection formData={formData} onChange={handleChange} />
              <ContactSection formData={formData} onChange={handleChange} />
              <AdditionalInfoSection formData={formData} onChange={handleChange} />
              <FormActions loading={loading} onCancel={() => router.back()} />
            </form>
          </div>

          <ImportantNotes />
        </div>
      </Container>
    </div>
  );
}
