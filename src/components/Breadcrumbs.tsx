import { useNavigate } from '@/router';
import { ChevronRight, Home } from 'lucide-react';

export interface Crumb {
  label: string;
  to?: string;
}

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const navigate = useNavigate();
  return (
    <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1 text-sm">
      <button
        onClick={() => navigate('/')}
        className="flex items-center gap-1 text-ink-500 hover:text-primary-700 transition-colors"
      >
        <Home className="h-3.5 w-3.5" />
        <span className="sr-only">Home</span>
      </button>
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-1">
          <ChevronRight className="h-3.5 w-3.5 text-ink-300" />
          {item.to ? (
            <button
              onClick={() => navigate(item.to!)}
              className="text-ink-500 hover:text-primary-700 transition-colors max-w-[180px] truncate"
            >
              {item.label}
            </button>
          ) : (
            <span className="font-semibold text-ink-800 max-w-[220px] truncate">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
