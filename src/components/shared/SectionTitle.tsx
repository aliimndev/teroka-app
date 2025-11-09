// src/components/shared/SectionTitle.tsx
interface SectionTitleProps {
  title: string;
  className?: string;
}

export function SectionTitle({ title, className }: SectionTitleProps) {
  return (
    <h2 className={`text-2xl font-bold text-center ${className || ''}`}>
      {title}
    </h2>
  );
}