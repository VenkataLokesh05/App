import { Breadcrumbs } from '@/components/Breadcrumbs';
import { TopicContentView } from '@/components/TopicContentView';
import { ComingSoonCard } from '@/components/ComingSoonCard';
import { Link } from '@/components/Link';
import { getExam, accentClasses } from '@/data/exams';
import { getSyllabus } from '@/data/syllabus';
import { ChevronRight } from 'lucide-react';

export function TopicPage({ examSlug, subjectId, topicId }: { examSlug: string; subjectId: string; topicId: string }) {
  const exam = getExam(examSlug);
  const syllabus = getSyllabus(examSlug);
  if (!exam) return null;
  const subject = syllabus?.subjects.find((s) => s.id === subjectId);
  const topic = subject?.topics.find((t) => t.id === topicId);

  if (!syllabus || !subject || !topic) {
    return (
      <div className="container-page py-8 sm:py-10">
        <Breadcrumbs items={[
          { label: 'Exams', to: '/exams' },
          { label: exam.name, to: `/exam/${examSlug}` },
          { label: 'Syllabus', to: `/exam/${examSlug}/syllabus` },
          { label: 'Topic' },
        ]} />
        <div className="mt-6"><ComingSoonCard examName={exam.name} feature="This topic" /></div>
      </div>
    );
  }

  // sibling topics for easy navigation
  const idx = subject.topics.findIndex((t) => t.id === topicId);
  const prev = subject.topics[idx - 1];
  const next = subject.topics[idx + 1];
  const a = accentClasses[exam.accent];

  return (
    <div className="container-page py-8 sm:py-10">
      <Breadcrumbs items={[
        { label: 'Exams', to: '/exams' },
        { label: exam.name, to: `/exam/${examSlug}` },
        { label: 'Syllabus', to: `/exam/${examSlug}/syllabus` },
        { label: subject.name, to: `/exam/${examSlug}/syllabus/${subjectId}` },
        { label: topic.name },
      ]} />

      <div className="mt-5 grid gap-8 lg:grid-cols-[1fr_260px]">
        <div className="min-w-0">
          <TopicContentView content={topic.content} />

          {/* prev / next */}
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {prev ? (
              <Link to={`/exam/${examSlug}/syllabus/${subjectId}/${prev.id}`} className="card card-hover p-4 group">
                <p className="text-xs font-semibold uppercase tracking-wider text-ink-400">Previous topic</p>
                <p className="mt-1 flex items-center gap-1.5 font-semibold text-ink-800 group-hover:text-primary-700">
                  <ChevronRight className="h-4 w-4 rotate-180" /> {prev.name}
                </p>
              </Link>
            ) : <div />}
            {next ? (
              <Link to={`/exam/${examSlug}/syllabus/${subjectId}/${next.id}`} className="card card-hover p-4 text-right group">
                <p className="text-xs font-semibold uppercase tracking-wider text-ink-400">Next topic</p>
                <p className="mt-1 flex items-center justify-end gap-1.5 font-semibold text-ink-800 group-hover:text-primary-700">
                  {next.name} <ChevronRight className="h-4 w-4" />
                </p>
              </Link>
            ) : <div />}
          </div>
        </div>

        {/* sidebar: topics in this subject */}
        <aside className="lg:sticky lg:top-20 lg:self-start">
          <div className="card p-4">
            <p className={`text-xs font-bold uppercase tracking-wider ${a.text}`}>More in {subject.name}</p>
            <ul className="mt-3 space-y-1 max-h-[60vh] overflow-y-auto scrollbar-thin pr-1">
              {subject.topics.map((t, i) => (
                <li key={t.id}>
                  <Link
                    to={`/exam/${examSlug}/syllabus/${subjectId}/${t.id}`}
                    className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition-colors ${
                      t.id === topicId
                        ? `${a.bgSoft} ${a.text} font-semibold`
                        : 'text-ink-700 hover:bg-ink-100'
                    }`}
                  >
                    <span className="grid h-5 w-5 shrink-0 place-items-center rounded text-[10px] font-bold text-ink-400">{i + 1}</span>
                    <span className="truncate">{t.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
