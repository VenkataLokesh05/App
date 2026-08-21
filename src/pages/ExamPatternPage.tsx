import { Breadcrumbs } from '@/components/Breadcrumbs';
import { ExamPatternTree } from '@/components/ExamPatternTree';
import { ComingSoonCard } from '@/components/ComingSoonCard';
import { getExam } from '@/data/exams';
import { getPattern } from '@/data/examPattern';

export function ExamPatternPage({ examSlug }: { examSlug: string }) {
  const exam = getExam(examSlug);
  const pattern = getPattern(examSlug);
  if (!exam) return null;

  return (
    <div className="container-page py-8 sm:py-10">
      <Breadcrumbs items={[
        { label: 'Exams', to: '/exams' },
        { label: exam.name, to: `/exam/${examSlug}` },
        { label: 'Exam Pattern' },
      ]} />

      <div className="mt-5">
        <h1 className="text-2xl sm:text-3xl font-bold text-ink-900">{exam.name} — Exam Pattern</h1>
        <p className="mt-2 text-ink-600 max-w-2xl">The complete structure of the {exam.name} examination — stages, papers, subjects, marks, duration and negative marking — shown as a visual tree.</p>
      </div>

      <div className="mt-8">
        {!pattern ? (
          <ComingSoonCard examName={exam.name} feature="Exam pattern" />
        ) : (
          <ExamPatternTree pattern={pattern} />
        )}
      </div>
    </div>
  );
}
