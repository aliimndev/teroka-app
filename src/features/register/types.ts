export interface UmkmFormData {
  name: string;
  category: string;
  description: string;
  address: string;
  city: string;
  province: string;
  contact: string;
  operating_hours: string;
  image: string;
  owner_name: string;
  established_year: string;
  employee_count: string;
}

export const initialFormData: UmkmFormData = {
  name: '',
  category: 'makanan',
  description: '',
  address: '',
  city: '',
  province: '',
  contact: '',
  operating_hours: '',
  image: '',
  owner_name: '',
  established_year: '',
  employee_count: '',
};
