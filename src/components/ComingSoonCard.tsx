import { Link } from '@/components/Link';
import { Sparkles } from 'lucide-react';

export function ComingSoonCard({ examName, feature }: { examName: string; feature: string }) {
  return (
    <div className="card p-8 text-center animate-fade-up">
      <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-primary-50 text-primary-600 ring-1 ring-primary-200">
        <Sparkles className="h-7 w-7" />
      </span>
      <h3 className="mt-4 text-lg font-bold text-ink-900">{feature} for {examName} is being prepared</h3>
      <p className="mt-2 text-sm text-ink-600 max-w-md mx-auto">
        Our content team is curating this section. The structure is ready — detailed content will appear here once added by the administrator.
      </p>
      <Link to="/exams" className="btn-secondary mt-5 inline-flex">Browse other exams</Link>
    </div>
  );
}
