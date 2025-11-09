import { Button } from '@/components/ui/button';

interface FormActionsProps {
  loading: boolean;
  onCancel: () => void;
}

export function FormActions({ loading, onCancel }: FormActionsProps) {
  return (
    <div className="pt-6 border-t">
      <div className="flex flex-col sm:flex-row gap-4 justify-end">
        <Button
          type="button"
          variant="outline"
          onClick={onCancel}
          disabled={loading}
          className="w-full sm:w-auto"
        >
          Batal
        </Button>
        <Button
          type="submit"
          disabled={loading}
          className="w-full sm:w-auto min-w-[200px]"
        >
          {loading ? (
            <div className="flex items-center justify-center gap-2">
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              <span>Mendaftar...</span>
            </div>
          ) : (
            'Daftarkan UMKM'
          )}
        </Button>
      </div>
    </div>
  );
}
