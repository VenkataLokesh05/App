import type { LucideIcon } from 'lucide-react';
import { Link } from '@/components/Link';
import { accentClasses } from '@/data/exams';
import type { ExamMeta } from '@/types';
import { ArrowRight } from 'lucide-react';

interface ExamCardProps {
  exam: ExamMeta;
  index?: number;
}

export function ExamCard({ exam, index = 0 }: ExamCardProps) {
  const Icon = exam.icon;
  const a = accentClasses[exam.accent];
  return (
    <Link
      to={`/exam/${exam.slug}`}
      className="group block animate-fade-up"
      ariaLabel={`Open ${exam.name} preparation page`}
    >
      <div
        className="card card-hover relative h-full overflow-hidden p-5 sm:p-6"
        style={{ animationDelay: `${Math.min(index, 8) * 40}ms` }}
      >
        <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${a.gradient}`} />
        <div className="flex items-start justify-between gap-3">
          <span className={`grid h-12 w-12 shrink-0 place-items-center rounded-xl ${a.bgSoft} ${a.text} ring-1 ${a.ring}`}>
            <Icon className="h-6 w-6" />
          </span>
          <ArrowRight className="h-5 w-5 text-ink-300 transition-all duration-300 group-hover:translate-x-1 group-hover:text-primary-600" />
        </div>
        <h3 className="mt-4 text-lg font-bold text-ink-900">{exam.name}</h3>
        <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-ink-500">{exam.tagline}</p>
        <p className="mt-2.5 text-sm leading-relaxed text-ink-600 line-clamp-2">{exam.description}</p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {exam.highlights.slice(0, 3).map((h) => (
            <span key={h} className={`chip ring-1 ${a.chip}`}>{h}</span>
          ))}
          {exam.highlights.length > 3 && (
            <span className="chip bg-ink-100 text-ink-600 ring-1 ring-ink-200">+{exam.highlights.length - 3}</span>
          )}
        </div>
      </div>
    </Link>
  );
}

interface NavCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  to: string;
  accent?: 'blue' | 'emerald' | 'amber';
  index?: number;
}

const navCardAccent: Record<string, { bg: string; text: string; ring: string; gradient: string }> = {
  blue: { bg: 'bg-primary-50', text: 'text-primary-700', ring: 'ring-primary-200', gradient: 'from-primary-500 to-primary-700' },
  emerald: { bg: 'bg-success-50', text: 'text-success-700', ring: 'ring-success-200', gradient: 'from-success-500 to-success-700' },
  amber: { bg: 'bg-accent-50', text: 'text-accent-700', ring: 'ring-accent-200', gradient: 'from-accent-400 to-accent-600' },
};

export function NavCard({ icon: Icon, title, description, to, accent = 'blue', index = 0 }: NavCardProps) {
  const a = navCardAccent[accent];
  return (
    <Link to={to} className="group block animate-fade-up" ariaLabel={`Open ${title}`}>
      <div
        className="card card-hover relative h-full overflow-hidden p-6 sm:p-8"
        style={{ animationDelay: `${index * 60}ms` }}
      >
        <div className={`absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br ${a.gradient} opacity-10 blur-2xl transition-opacity group-hover:opacity-20`} />
        <div className="relative">
          <span className={`grid h-14 w-14 place-items-center rounded-2xl ${a.bg} ${a.text} ring-1 ${a.ring}`}>
            <Icon className="h-7 w-7" />
          </span>
          <h3 className="mt-5 text-xl font-bold text-ink-900">{title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-ink-600">{description}</p>
          <span className={`mt-4 inline-flex items-center gap-1.5 text-sm font-semibold ${a.text}`}>
            Explore <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </span>
        </div>
      </div>
    </Link>
  );
}

interface TopicCardProps {
  title: string;
  description: string;
  to: string;
  index?: number;
}

export function TopicCard({ title, description, to, index = 0 }: TopicCardProps) {
  return (
    <Link to={to} className="group block animate-fade-up" ariaLabel={`Open ${title}`}>
      <div
        className="card card-hover h-full p-5"
        style={{ animationDelay: `${Math.min(index, 12) * 30}ms` }}
      >
        <div className="flex items-center justify-between gap-2">
          <h4 className="text-base font-semibold text-ink-900 group-hover:text-primary-700 transition-colors">{title}</h4>
          <ArrowRight className="h-4 w-4 shrink-0 text-ink-300 transition-all group-hover:translate-x-1 group-hover:text-primary-600" />
        </div>
        <p className="mt-1.5 text-sm leading-relaxed text-ink-600 line-clamp-2">{description}</p>
      </div>
    </Link>
  );
}
