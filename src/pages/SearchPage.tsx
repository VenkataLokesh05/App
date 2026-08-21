import { useEffect, useMemo, useState } from 'react';
import { Link } from '@/components/Link';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { useNavigate } from '@/router';
import { exams, getExam } from '@/data/exams';
import { getSyllabus } from '@/data/syllabus';
import { getPractice } from '@/data/practice';
import { Search as SearchIcon, ArrowRight, FileText, BookOpen, HelpCircle, X } from 'lucide-react';

interface SearchResult {
  type: 'exam' | 'subject' | 'topic' | 'question';
  title: string;
  subtitle: string;
  to: string;
  examSlug: string;
}

function buildIndex(): SearchResult[] {
  const results: SearchResult[] = [];
  for (const exam of exams) {
    results.push({ type: 'exam', title: exam.name, subtitle: exam.fullName, to: `/exam/${exam.slug}`, examSlug: exam.slug });
    const syllabus = getSyllabus(exam.slug);
    if (syllabus) {
      for (const subject of syllabus.subjects) {
        results.push({
          type: 'subject',
          title: subject.name,
          subtitle: `${exam.name} · Syllabus`,
          to: `/exam/${exam.slug}/syllabus/${subject.id}`,
          examSlug: exam.slug,
        });
        for (const topic of subject.topics) {
          results.push({
            type: 'topic',
            title: topic.name,
            subtitle: `${exam.name} · ${subject.name}`,
            to: `/exam/${exam.slug}/syllabus/${subject.id}/${topic.id}`,
            examSlug: exam.slug,
          });
        }
      }
    }
    const practice = getPractice(exam.slug);
    if (practice) {
      for (const q of practice.questions) {
        results.push({
          type: 'question',
          title: q.question,
          subtitle: `${exam.name} · ${q.subject} · ${q.topic}`,
          to: `/exam/${exam.slug}/practice`,
          examSlug: exam.slug,
        });
      }
    }
  }
  return results;
}

const typeMeta: Record<SearchResult['type'], { label: string; icon: typeof FileText; color: string }> = {
  exam: { label: 'Exam', icon: FileText, color: 'bg-primary-50 text-primary-700 ring-primary-200' },
  subject: { label: 'Subject', icon: BookOpen, color: 'bg-success-50 text-success-700 ring-success-200' },
  topic: { label: 'Topic', icon: BookOpen, color: 'bg-accent-50 text-accent-700 ring-accent-200' },
  question: { label: 'Question', icon: HelpCircle, color: 'bg-violet-50 text-violet-700 ring-violet-200' },
};

export function SearchPage() {
  const navigate = useNavigate();
  const index = useMemo(() => buildIndex(), []);
  const [query, setQuery] = useState('');

  // read initial query from the URL hash
  useEffect(() => {
    const raw = window.location.hash.split('?')[1] ?? '';
    const params = new URLSearchParams(raw);
    const q = params.get('q');
    if (q) setQuery(q);
  }, []);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return index
      .filter((r) => r.title.toLowerCase().includes(q) || r.subtitle.toLowerCase().includes(q))
      .slice(0, 30);
  }, [query, index]);

  return (
    <div className="container-page py-8 sm:py-10">
      <Breadcrumbs items={[{ label: 'Search' }]} />

      <div className="mt-5">
        <h1 className="text-2xl sm:text-3xl font-bold text-ink-900">Search</h1>
        <p className="mt-2 text-ink-600 max-w-2xl">Find exams, subjects, topics and practice questions across the platform.</p>
      </div>

      <div className="mt-6 card p-2 shadow-card">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            navigate(`/search?q=${encodeURIComponent(query.trim())}`);
          }}
          className="flex items-center gap-2"
        >
          <SearchIcon className="ml-3 h-5 w-5 shrink-0 text-ink-400" />
          <input
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type an exam, subject, topic or keyword..."
            className="w-full bg-transparent py-3 text-base text-ink-900 placeholder:text-ink-400 focus:outline-none"
            aria-label="Search query"
          />
          {query && (
            <button type="button" onClick={() => setQuery('')} className="grid h-8 w-8 shrink-0 place-items-center rounded-lg text-ink-400 hover:bg-ink-100" aria-label="Clear search">
              <X className="h-4 w-4" />
            </button>
          )}
        </form>
      </div>

      <div className="mt-6">
        {query.trim() === '' ? (
          <div className="card p-10 text-center">
            <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-primary-50 text-primary-600 ring-1 ring-primary-200">
              <SearchIcon className="h-7 w-7" />
            </span>
            <p className="mt-4 font-semibold text-ink-900">Start typing to search</p>
            <p className="mt-1 text-sm text-ink-600">Try "SSC", "Percentage", "Polity" or "Profit".</p>
          </div>
        ) : results.length === 0 ? (
          <div className="card p-10 text-center">
            <p className="font-semibold text-ink-900">No results for "{query}"</p>
            <p className="mt-1 text-sm text-ink-600">Try a different keyword or browse all exams.</p>
            <Link to="/exams" className="btn-secondary mt-4 inline-flex">Browse all exams</Link>
          </div>
        ) : (
          <>
            <p className="mb-3 text-sm text-ink-500">{results.length} result{results.length > 1 ? 's' : ''} for "{query}"</p>
            <div className="space-y-2.5">
              {results.map((r, i) => {
                const meta = typeMeta[r.type];
                const Icon = meta.icon;
                const exam = getExam(r.examSlug);
                return (
                  <Link key={i} to={r.to} className="group block animate-fade-up" ariaLabel={r.title}>
                    <div className="card card-hover flex items-center gap-4 p-4" style={{ animationDelay: `${Math.min(i, 10) * 30}ms` }}>
                      <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl ring-1 ${meta.color}`}>
                        <Icon className="h-5 w-5" />
                      </span>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2">
                          <span className={`chip ring-1 ${meta.color}`}>{meta.label}</span>
                          {exam && <span className="text-xs font-medium text-ink-400">{exam.name}</span>}
                        </div>
                        <p className="mt-1 truncate font-semibold text-ink-900 group-hover:text-primary-700">{r.title}</p>
                        <p className="truncate text-sm text-ink-500">{r.subtitle}</p>
                      </div>
                      <ArrowRight className="h-5 w-5 shrink-0 text-ink-300 transition-all group-hover:translate-x-1 group-hover:text-primary-600" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
