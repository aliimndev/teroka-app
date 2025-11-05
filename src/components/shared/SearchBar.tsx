// src/components/shared/SearchBar.tsx
import { Input } from '@/components/ui';

interface SearchBarProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
}

export function SearchBar({ value, onChange, placeholder, className }: SearchBarProps) {
  return (
    <Input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder || 'Cari...'}
      className={className || "w-full max-w-lg mx-auto p-4 text-lg rounded-lg border border-gray-300 focus:border-blue-500"}
    />
  );
}