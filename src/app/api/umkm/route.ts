import { NextResponse } from 'next/server';

// Mock data UMKM
const mockUmkmData = [
  {
    id: '1',
    name: 'Warung Nasi Uduk Pak Budi',
    category: 'makanan',
    image: '',
    location: 'Jakarta Selatan',
    description: 'Nasi uduk enak dengan lauk lengkap'
  },
  {
    id: '2',
    name: 'Kedai Kopi Senja',
    category: 'minuman',
    image: '',
    location: 'Jakarta Pusat',
    description: 'Kopi lokal dengan suasana nyaman'
  },
  {
    id: '3',
    name: 'Bengkel Motor Maju Jaya',
    category: 'jasa',
    image: '',
    location: 'Jakarta Barat',
    description: 'Service motor profesional dan murah'
  },
  {
    id: '4',
    name: 'Butik Batik Indonesia',
    category: 'fashion',
    image: '',
    location: 'Jakarta Timur',
    description: 'Batik berkualitas dengan desain modern'
  },
  {
    id: '5',
    name: 'Ayam Bakar Masak Padang',
    category: 'makanan',
    image: '',
    location: 'Jakarta Utara',
    description: 'Ayam bakar dengan bumbu khas padang'
  },
  {
    id: '6',
    name: 'Es Teh Manis Tegal',
    category: 'minuman',
    image: '',
    location: 'Jakarta Selatan',
    description: 'Es teh manis asli dari Tegal'
  },
  {
    id: '7',
    name: 'Cuci Steam Mobil Express',
    category: 'jasa',
    image: '',
    location: 'Jakarta Pusat',
    description: 'Cuci mobil profesional dengan steam'
  },
  {
    id: '8',
    name: 'Toko Kain Tradisional',
    category: 'fashion',
    image: '',
    location: 'Jakarta Barat',
    description: 'Kain-kain tradisional Indonesia'
  }
];

export async function GET() {
  try {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));

    return NextResponse.json({
      success: true,
      data: mockUmkmData,
      message: 'Data berhasil dimuat'
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        data: null,
        message: 'Gagal memuat data UMKM'
      },
      { status: 500 }
    );
  }
}