// src/components/shared/UmkmCard.tsx
import Link from 'next/link';
import { Card } from '@/components/ui';
import Image from 'next/image';
import { MapPin, Star } from 'lucide-react';
import { Utensils, Coffee, Wrench, Shirt } from 'lucide-react';

interface UmkmCardProps {
  id: string;
  name: string;
  category: string;
  image: string;
  location: string;
  rating?: number;
  distance?: number;
}

// PERBAIKAN: Tambahkan tipe SVG props agar className diterima
const categoryIcons: Record<string, React.FC<React.SVGProps<SVGSVGElement>>> = {
  makanan: Utensils,
  minuman: Coffee,
  jasa: Wrench,
  fashion: Shirt,
};

export function UmkmCard({
  id,
  name,
  category,
  image,
  location,
  rating = 4.5,
  distance = Math.random() * 2 + 0.1,
}: UmkmCardProps) {
  const Icon = categoryIcons[category.toLowerCase()] || Utensils;

  return (
    <Link href={`/umkm/${id}`} className="block">
      <Card className="overflow-hidden rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
        {/* Gambar + Rating Badge */}
        <div className="relative">
          <Image
            src={image}
            alt={name}
            width={300}
            height={200}
            className="w-full h-40 object-cover"
          />
          <div className="absolute top-2 right-2 bg-white/95 backdrop-blur-sm px-2 py-1 rounded-full flex items-center gap-1 text-xs font-semibold shadow-sm">
            <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
            {rating.toFixed(1)}
          </div>
        </div>

        {/* Konten */}
        <div className="p-3">
          <h3 className="font-bold text-sm line-clamp-2 mb-1">{name}</h3>

          {/* Kategori + Ikon */}
          <div className="flex items-center gap-1.5 mb-1">
            <Icon className="w-3.5 h-3.5 text-red-600" />
            <span className="text-xs font-medium text-gray-700 capitalize">
              {category}
            </span>
          </div>

          {/* Lokasi + Jarak */}
          <div className="flex items-center justify-between text-xs text-gray-500">
            <span className="flex items-center gap-1">
              <MapPin className="w-3 h-3 text-red-500" />
              {location}
            </span>
            <span className="font-medium text-red-600">
              {distance.toFixed(1)} km
            </span>
          </div>
        </div>
      </Card>
    </Link>
  );
}