import { Breadcrumbs } from '@/components/Breadcrumbs';
import { TopicCard } from '@/components/Cards';
import { ComingSoonCard } from '@/components/ComingSoonCard';
import { getExam, accentClasses } from '@/data/exams';
import { getSyllabus } from '@/data/syllabus';

export function SubjectPage({ examSlug, subjectId }: { examSlug: string; subjectId: string }) {
  const exam = getExam(examSlug);
  const syllabus = getSyllabus(examSlug);
  if (!exam) return null;
  const a = accentClasses[exam.accent];
  const subject = syllabus?.subjects.find((s) => s.id === subjectId);

  if (!syllabus || !subject) {
    return (
      <div className="container-page py-8 sm:py-10">
        <Breadcrumbs items={[{ label: 'Exams', to: '/exams' }, { label: exam.name, to: `/exam/${examSlug}` }, { label: 'Syllabus', to: `/exam/${examSlug}/syllabus` }, { label: 'Subject' }]} />
        <div className="mt-6"><ComingSoonCard examName={exam.name} feature="This subject" /></div>
      </div>
    );
  }

  const Icon = subject.icon;

  return (
    <div className="container-page py-8 sm:py-10">
      <Breadcrumbs items={[
        { label: 'Exams', to: '/exams' },
        { label: exam.name, to: `/exam/${examSlug}` },
        { label: 'Syllabus', to: `/exam/${examSlug}/syllabus` },
        { label: subject.name },
      ]} />

      <div className="mt-5 flex items-start gap-4">
        <span className={`grid h-14 w-14 shrink-0 place-items-center rounded-2xl ${a.bgSoft} ${a.text} ring-1 ${a.ring}`}>
          <Icon className="h-7 w-7" />
        </span>
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-ink-900">{subject.name}</h1>
          <p className="mt-1.5 text-ink-600 max-w-2xl">{subject.description}</p>
          <p className="mt-2 text-sm font-medium text-ink-500">{subject.topics.length} topics — click any to view the complete concept notes</p>
        </div>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {subject.topics.map((topic, i) => (
          <TopicCard
            key={topic.id}
            title={topic.name}
            description={topic.content.intro}
            to={`/exam/${examSlug}/syllabus/${subjectId}/${topic.id}`}
            index={i}
          />
        ))}
      </div>
    </div>
  );
}
