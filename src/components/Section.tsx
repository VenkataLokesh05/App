import type { ReactNode } from 'react';
import { Link } from '@/components/Link';
import { ChevronRight } from 'lucide-react';

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
}

export function SectionHeader({ eyebrow, title, description, children }: SectionHeaderProps) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div className="max-w-2xl">
        {eyebrow && (
          <p className="text-xs font-bold uppercase tracking-wider text-primary-600">{eyebrow}</p>
        )}
        <h2 className="mt-1.5 text-2xl sm:text-3xl font-bold text-ink-900">{title}</h2>
        {description && <p className="mt-2 text-sm sm:text-base text-ink-600 leading-relaxed">{description}</p>}
      </div>
      {children}
    </div>
  );
}

interface PageHeaderProps {
  title: string;
  description?: string;
  children?: ReactNode;
  meta?: { label: string; value: string }[];
}

export function PageHeader({ title, description, children, meta }: PageHeaderProps) {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary-700 via-primary-800 to-primary-950 px-6 py-10 sm:px-10 sm:py-14 text-white shadow-lg">
      <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-primary-400/20 blur-3xl" />
      <div className="relative">
        {children}
        <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">{title}</h1>
        {description && <p className="mt-3 max-w-2xl text-base sm:text-lg text-primary-100 leading-relaxed">{description}</p>}
        {meta && (
          <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3">
            {meta.map((m) => (
              <div key={m.label}>
                <p className="text-xs font-semibold uppercase tracking-wider text-primary-300">{m.label}</p>
                <p className="text-sm font-semibold text-white">{m.value}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

interface SimpleCardGridLinkProps {
  to: string;
  title: string;
  subtitle?: string;
}

export function SeeAllLink({ to, title, subtitle }: SimpleCardGridLinkProps) {
  return (
    <Link to={to} className="group inline-flex items-center gap-1.5 text-sm font-semibold text-primary-700 hover:text-primary-800">
      {title}
      <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      {subtitle && <span className="sr-only">{subtitle}</span>}
    </Link>
  );
}
