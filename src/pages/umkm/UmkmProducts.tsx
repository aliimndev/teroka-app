import Image from 'next/image';
import { Star } from 'lucide-react';

import { Card } from '@/components/ui';
import { Button } from '@/components/ui/button';

interface UmkmProductsProps {
  umkmId: string;
}

// Mock data produk
const mockProducts = [
  {
    id: '1',
    name: 'Nasi Uduk Komplit',
    price: 25000,
    image: '/images/nasi-uduk.jpg',
    rating: 4.8,
    sold: 145,
    description: 'Nasi uduk dengan lauk pauk lengkap'
  },
  {
    id: '2',
    name: 'Nasi Uduk Ayam Bakar',
    price: 30000,
    image: '/images/nasi-uduk-ayam.jpg',
    rating: 4.9,
    sold: 98,
    description: 'Nasi uduk dengan ayam bakar khas'
  },
  {
    id: '3',
    name: 'Nasi Uduk Telur Dadar',
    price: 20000,
    image: '/images/nasi-uduk-telur.jpg',
    rating: 4.7,
    sold: 67,
    description: 'Nasi uduk dengan telur dadar tebal'
  },
  {
    id: '4',
    name: 'Nasi Uduk Sayuran',
    price: 22000,
    image: '/images/nasi-uduk-sayur.jpg',
    rating: 4.6,
    sold: 52,
    description: 'Nasi uduk dengan berbagai sayuran'
  }
];

export default function UmkmProducts({ umkmId }: UmkmProductsProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold">Produk Unggulan</h2>
        <Button variant="outline" size="sm">
          Lihat Semua
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {mockProducts.map((product) => (
          <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
            {/* Product Image */}
            <div className="relative h-48">
              <Image
                src={product.image || '/images/default-product.jpg'}
                alt={product.name}
                fill
                className="object-cover"
              />

              {/* Rating Badge */}
              <div className="absolute top-2 right-2 bg-white/95 backdrop-blur-sm px-2 py-1 rounded-full flex items-center gap-1 text-xs font-semibold">
                <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                {product.rating}
              </div>
            </div>

            {/* Product Info */}
            <div className="p-4">
              <h3 className="font-semibold text-sm mb-1 line-clamp-1">
                {product.name}
              </h3>
              <p className="text-xs text-gray-600 mb-2 line-clamp-2">
                {product.description}
              </p>

              <div className="flex items-center justify-between">
                <div>
                  <div className="text-lg font-bold text-red-600">
                    Rp {product.price.toLocaleString('id-ID')}
                  </div>
                  <div className="text-xs text-gray-500">
                    {product.sold} terjual
                  </div>
                </div>
                <Button size="sm" className="bg-red-600 hover:bg-red-700">
                  + Keranjang
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Load More Button */}
      <div className="text-center">
        <Button variant="outline" size="lg" className="rounded-full">
          Muat Lebih Banyak Produk
        </Button>
      </div>
    </div>
  );
}