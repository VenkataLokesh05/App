import { ExamCard } from '@/components/Cards';
import { PageHeader } from '@/components/Section';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { exams } from '@/data/exams';

export function ExamsPage() {
  return (
    <div className="container-page py-8 sm:py-10">
      <Breadcrumbs items={[{ label: 'Exams' }]} />
      <div className="mt-5">
        <PageHeader
          title="All Government Examinations"
          description="Choose the examination you're preparing for. Each exam has its own dedicated syllabus, exam pattern and practice section."
        />
      </div>
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {exams.map((exam, i) => (
          <ExamCard key={exam.slug} exam={exam} index={i} />
        ))}
      </div>
    </div>
  );
}
