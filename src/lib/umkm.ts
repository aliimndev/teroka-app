import { Umkm } from '@/types/umkm';

// Mock data - ini sama dengan data di API route
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

export function getUmkmById(id: string): Umkm | null {
  return mockUmkmData.find(umkm => umkm.id === id) || null;
}

export function getAllUmkm(): Umkm[] {
  return mockUmkmData;
}