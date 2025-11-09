import { NextRequest, NextResponse } from 'next/server';

// Mock data - sama dengan di API route utama
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
  },
  {
    id: '9',
    name: 'Sate Madura H. Abdul',
    category: 'makanan',
    image: '',
    location: 'Jakarta Selatan',
    description: 'Sate ayam dan kambing khas Madura dengan bumbu kacang'
  },
  {
    id: '10',
    name: 'Jamu Herbal Sehat',
    category: 'minuman',
    image: '',
    location: 'Jakarta Timur',
    description: 'Jamu tradisional untuk kesehatan dan kebugaran'
  }
];

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const params = await context.params;
    console.log('Searching for UMKM with ID:', params.id);

    const umkm = mockUmkmData.find(item => item.id === params.id);
    console.log('Found UMKM:', umkm);

    if (!umkm) {
      return NextResponse.json(
        {
          success: false,
          data: null,
          message: 'UMKM tidak ditemukan'
        },
        { status: 404 }
      );
    }

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 300));

    return NextResponse.json({
      success: true,
      data: umkm,
      message: 'Data UMKM berhasil dimuat'
    });
  } catch (error) {
    console.error('API Error:', error);
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