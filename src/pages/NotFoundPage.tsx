import { Link } from '@/components/Link';
import { Home, Search, Compass } from 'lucide-react';

export function NotFoundPage() {
  return (
    <div className="container-page py-20 sm:py-28">
      <div className="mx-auto max-w-md text-center">
        <span className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-primary-50 text-primary-600 ring-1 ring-primary-200">
          <Compass className="h-8 w-8" />
        </span>
        <p className="mt-6 text-5xl font-extrabold text-ink-900">404</p>
        <h1 className="mt-2 text-xl font-bold text-ink-900">Page not found</h1>
        <p className="mt-2 text-sm text-ink-600">The page you're looking for doesn't exist or may have moved.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <Link to="/" className="btn-primary"><Home className="h-4 w-4" /> Go home</Link>
          <Link to="/exams" className="btn-secondary"><Search className="h-4 w-4" /> Browse exams</Link>
        </div>
      </div>
    </div>
  );
}
