import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Link } from '@/components/Link';
import { ComingSoonCard } from '@/components/ComingSoonCard';
import { getExam, accentClasses } from '@/data/exams';
import { getSyllabus } from '@/data/syllabus';
import { ArrowRight, BookOpen } from 'lucide-react';

export function SyllabusPage({ examSlug }: { examSlug: string }) {
  const exam = getExam(examSlug);
  const syllabus = getSyllabus(examSlug);
  if (!exam) return null;
  const a = accentClasses[exam.accent];

  return (
    <div className="container-page py-8 sm:py-10">
      <Breadcrumbs items={[{ label: 'Exams', to: '/exams' }, { label: exam.name, to: `/exam/${examSlug}` }, { label: 'Syllabus' }]} />

      <div className="mt-5">
        <h1 className="text-2xl sm:text-3xl font-bold text-ink-900">{exam.name} — Syllabus</h1>
        <p className="mt-2 text-ink-600 max-w-2xl">Select a subject to view its complete topic-wise syllabus. Each topic opens to detailed concept notes.</p>
      </div>

      {!syllabus || syllabus.subjects.length === 0 ? (
        <div className="mt-6"><ComingSoonCard examName={exam.name} feature="Syllabus" /></div>
      ) : (
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {syllabus.subjects.map((subj, i) => {
            const Icon = subj.icon;
            return (
              <Link
                key={subj.id}
                to={`/exam/${examSlug}/syllabus/${subj.id}`}
                className="group block animate-fade-up"
                ariaLabel={`Open ${subj.name} syllabus`}
              >
                <div className="card card-hover relative h-full overflow-hidden p-6" style={{ animationDelay: `${i * 50}ms` }}>
                  <div className={`absolute -right-10 -top-10 h-28 w-28 rounded-full ${a.bgSoft} opacity-60 blur-2xl`} />
                  <div className="relative flex items-start justify-between gap-3">
                    <span className={`grid h-12 w-12 shrink-0 place-items-center rounded-xl ${a.bgSoft} ${a.text} ring-1 ${a.ring}`}>
                      <Icon className="h-6 w-6" />
                    </span>
                    <ArrowRight className="h-5 w-5 text-ink-300 transition-all group-hover:translate-x-1 group-hover:text-primary-600" />
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-ink-900">{subj.name}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-600">{subj.description}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className={`chip ring-1 ${a.chip}`}>
                      <BookOpen className="h-3 w-3" /> {subj.topics.length} topics
                    </span>
                    <span className="text-xs font-medium text-ink-400">Tap to explore</span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
