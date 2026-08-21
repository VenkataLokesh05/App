import { Breadcrumbs } from '@/components/Breadcrumbs';
import { MCQCard } from '@/components/MCQCard';
import { ComingSoonCard } from '@/components/ComingSoonCard';
import { Link } from '@/components/Link';
import { getExam, accentClasses } from '@/data/exams';
import { getPractice } from '@/data/practice';
import { ArrowLeft, CheckCircle2, RotateCcw } from 'lucide-react';

export function PracticeSetPage({ examSlug, setId }: { examSlug: string; setId: string }) {
  const exam = getExam(examSlug);
  const practice = getPractice(examSlug);
  if (!exam) return null;
  const a = accentClasses[exam.accent];
  const set = practice?.sets.find((s) => s.id === setId);

  if (!practice || !set) {
    return (
      <div className="container-page py-8 sm:py-10">
        <Breadcrumbs items={[
          { label: 'Exams', to: '/exams' },
          { label: exam.name, to: `/exam/${examSlug}` },
          { label: 'Practice', to: `/exam/${examSlug}/practice` },
          { label: 'Set' },
        ]} />
        <div className="mt-6"><ComingSoonCard examName={exam.name} feature="This practice set" /></div>
      </div>
    );
  }

  const questions = set.questionIds
    .map((id) => practice.questions.find((q) => q.id === id))
    .filter((q): q is NonNullable<typeof q> => Boolean(q));

  return (
    <div className="container-page py-8 sm:py-10 max-w-3xl">
      <Breadcrumbs items={[
        { label: 'Exams', to: '/exams' },
        { label: exam.name, to: `/exam/${examSlug}` },
        { label: 'Practice', to: `/exam/${examSlug}/practice` },
        { label: set.title },
      ]} />

      <div className="mt-5">
        <Link to={`/exam/${examSlug}/practice`} className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink-600 hover:text-primary-700">
          <ArrowLeft className="h-4 w-4" /> Back to practice sets
        </Link>
        <div className="mt-3 flex items-start justify-between gap-4">
          <div>
            <p className={`text-xs font-bold uppercase tracking-wider ${a.text}`}>{set.subject}</p>
            <h1 className="mt-1 text-2xl sm:text-3xl font-bold text-ink-900">{set.title}</h1>
            <p className="mt-1.5 text-ink-600">{set.description}</p>
          </div>
          <span className="chip bg-ink-100 text-ink-700 ring-1 ring-ink-200 shrink-0">{questions.length} Qs</span>
        </div>
      </div>

      <div className="mt-8 space-y-5">
        {questions.map((q, i) => (
          <MCQCard key={q.id} mcq={q} index={i} total={questions.length} />
        ))}
      </div>

      <div className="mt-8 card p-6 text-center">
        <CheckCircle2 className="mx-auto h-10 w-10 text-success-600" />
        <h3 className="mt-3 text-lg font-bold text-ink-900">Set complete!</h3>
        <p className="mt-1 text-sm text-ink-600">Review your answers above or try another practice set.</p>
        <div className="mt-4 flex flex-wrap justify-center gap-2">
          <Link to={`/exam/${examSlug}/practice`} className="btn-secondary">
            <RotateCcw className="h-4 w-4" /> More sets
          </Link>
          <Link to={`/exam/${examSlug}/syllabus`} className="btn-primary">
            Revise syllabus
          </Link>
        </div>
      </div>
    </div>
  );
}
