'use client';

import { Pencil, Trash2, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Umkm } from '@/types/umkm';

interface UmkmTableProps {
  data: Umkm[];
  onEdit: (umkm: Umkm) => void;
  onDelete: (id: string) => void;
  onView: (id: string) => void;
}

export function UmkmTable({ data, onEdit, onDelete, onView }: UmkmTableProps) {
  if (data.length === 0) {
    return (
      <div className="border rounded-lg p-12 text-center bg-gray-50">
        <p className="text-gray-500 text-lg">Belum ada data UMKM</p>
        <p className="text-gray-400 text-sm mt-2">
          Klik tombol "Tambah UMKM" untuk menambahkan data pertama
        </p>
      </div>
    );
  }

  return (
    <div className="border rounded-lg overflow-hidden bg-white">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[50px]">No</TableHead>
            <TableHead>Nama UMKM</TableHead>
            <TableHead>Kategori</TableHead>
            <TableHead>Lokasi</TableHead>
            <TableHead>Kontak</TableHead>
            <TableHead>Rating</TableHead>
            <TableHead className="text-right">Aksi</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((umkm, index) => (
            <TableRow key={umkm.id}>
              <TableCell className="font-medium">{index + 1}</TableCell>
              <TableCell>
                <div className="flex items-center gap-3">
                  {umkm.image && (
                    <img
                      src={umkm.image}
                      alt={umkm.name}
                      className="w-10 h-10 rounded-lg object-cover"
                    />
                  )}
                  <div>
                    <div className="font-medium">{umkm.name}</div>
                    <div className="text-sm text-gray-500 line-clamp-1">
                      {umkm.description}
                    </div>
                  </div>
                </div>
              </TableCell>
              <TableCell>
                <span className="inline-flex items-center rounded-full bg-red-50 px-2 py-1 text-xs font-medium text-red-700 capitalize">
                  {umkm.category}
                </span>
              </TableCell>
              <TableCell>
                <div className="text-sm">
                  <div className="font-medium">{umkm.city}</div>
                  <div className="text-gray-500">{umkm.province}</div>
                </div>
              </TableCell>
              <TableCell>
                <div className="text-sm text-gray-600">{umkm.contact || '-'}</div>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-1">
                  <span className="text-yellow-500">★</span>
                  <span className="font-medium">
                    {umkm.rating ? umkm.rating.toFixed(1) : '-'}
                  </span>
                </div>
              </TableCell>
              <TableCell className="text-right">
                <div className="flex items-center justify-end gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => onView(umkm.id)}
                    className="h-8 w-8 p-0"
                    title="Lihat Detail"
                  >
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => onEdit(umkm)}
                    className="h-8 w-8 p-0"
                    title="Edit"
                  >
                    <Pencil className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      if (confirm(`Apakah Anda yakin ingin menghapus "${umkm.name}"?`)) {
                        onDelete(umkm.id);
                      }
                    }}
                    className="h-8 w-8 p-0 text-red-600 hover:bg-red-50 hover:text-red-700"
                    title="Hapus"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
