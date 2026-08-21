import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Link } from '@/components/Link';
import { ComingSoonCard } from '@/components/ComingSoonCard';
import { getExam, accentClasses } from '@/data/exams';
import { getPractice } from '@/data/practice';
import { ArrowRight, FileQuestion, ListChecks, PenSquare } from 'lucide-react';

export function PracticePage({ examSlug }: { examSlug: string }) {
  const exam = getExam(examSlug);
  const practice = getPractice(examSlug);
  if (!exam) return null;
  const a = accentClasses[exam.accent];

  return (
    <div className="container-page py-8 sm:py-10">
      <Breadcrumbs items={[
        { label: 'Exams', to: '/exams' },
        { label: exam.name, to: `/exam/${examSlug}` },
        { label: 'Practice Exercises' },
      ]} />

      <div className="mt-5">
        <h1 className="text-2xl sm:text-3xl font-bold text-ink-900">{exam.name} — Practice Exercises</h1>
        <p className="mt-2 text-ink-600 max-w-2xl">Attempt topic-wise MCQ practice sets. Each question comes with the correct answer and a detailed explanation after you submit.</p>
      </div>

      {!practice || practice.sets.length === 0 ? (
        <div className="mt-6"><ComingSoonCard examName={exam.name} feature="Practice questions" /></div>
      ) : (
        <>
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <Stat icon={ListChecks} label="Practice Sets" value={String(practice.sets.length)} />
            <Stat icon={FileQuestion} label="Total Questions" value={String(practice.questions.length)} />
            <Stat icon={PenSquare} label="With Explanations" value="All" />
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {practice.sets.map((set, i) => {
              const count = set.questionIds.length;
              return (
                <Link
                  key={set.id}
                  to={`/exam/${examSlug}/practice/${set.id}`}
                  className="group block animate-fade-up"
                  ariaLabel={`Start ${set.title}`}
                >
                  <div className="card card-hover h-full p-6" style={{ animationDelay: `${i * 50}ms` }}>
                    <span className={`grid h-12 w-12 place-items-center rounded-xl ${a.bgSoft} ${a.text} ring-1 ${a.ring}`}>
                      <PenSquare className="h-6 w-6" />
                    </span>
                    <p className={`mt-4 text-xs font-bold uppercase tracking-wider ${a.text}`}>{set.subject}</p>
                    <h3 className="mt-1 text-lg font-bold text-ink-900">{set.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-600">{set.description}</p>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="chip bg-ink-100 text-ink-700 ring-1 ring-ink-200">
                        <ListChecks className="h-3 w-3" /> {count} questions
                      </span>
                      <span className={`inline-flex items-center gap-1.5 text-sm font-semibold ${a.text}`}>
                        Start <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}

function Stat({ icon: Icon, label, value }: { icon: typeof ListChecks; label: string; value: string }) {
  return (
    <div className="card flex items-center gap-3 p-4">
      <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary-50 text-primary-700 ring-1 ring-primary-200">
        <Icon className="h-5 w-5" />
      </span>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-ink-500">{label}</p>
        <p className="text-lg font-bold text-ink-900">{value}</p>
      </div>
    </div>
  );
}
