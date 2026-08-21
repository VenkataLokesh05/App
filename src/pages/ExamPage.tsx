import { Breadcrumbs } from '@/components/Breadcrumbs';
import { NavCard } from '@/components/Cards';
import { PageHeader } from '@/components/Section';
import { getExam, accentClasses } from '@/data/exams';
import { getSyllabus } from '@/data/syllabus';
import { getPattern } from '@/data/examPattern';
import { getPractice } from '@/data/practice';
import { BookOpen, ListTree, PenSquare, Building2, CalendarDays, GraduationCap, ArrowRight } from 'lucide-react';
import { Link } from '@/components/Link';

export function ExamPage({ examSlug }: { examSlug: string }) {
  const exam = getExam(examSlug);
  if (!exam) return null;
  const a = accentClasses[exam.accent];
  const syllabus = getSyllabus(examSlug);
  const pattern = getPattern(examSlug);
  const practice = getPractice(examSlug);

  const subjectCount = syllabus?.subjects.length ?? 0;
  const topicCount = syllabus?.subjects.reduce((sum, s) => sum + s.topics.length, 0) ?? 0;
  const questionCount = practice?.questions.length ?? 0;

  return (
    <div className="container-page py-8 sm:py-10">
      <Breadcrumbs items={[{ label: 'Exams', to: '/exams' }, { label: exam.name }]} />

      <div className="mt-5">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary-700 via-primary-800 to-primary-950 px-6 py-10 sm:px-10 sm:py-12 text-white shadow-lg">
          <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-20 left-1/3 h-48 w-48 rounded-full bg-primary-400/20 blur-3xl" />
          <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-2xl">
              <span className={`inline-flex items-center gap-2 rounded-full ${a.bgSoft} ${a.text} px-3 py-1 text-xs font-bold uppercase tracking-wider ring-1 ${a.ring}`}>
                <exam.icon className="h-3.5 w-3.5" /> {exam.fullName}
              </span>
              <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">{exam.name}</h1>
              <p className="mt-3 text-base sm:text-lg text-primary-100 leading-relaxed">{exam.description}</p>
              <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3">
                <Meta icon={Building2} label="Conducting Body" value={exam.conductingBody} />
                <Meta icon={CalendarDays} label="Frequency" value={exam.frequency} />
                <Meta icon={GraduationCap} label="Eligibility" value={exam.eligibility} />
              </div>
            </div>
            <div className="shrink-0">
              <span className={`grid h-20 w-20 place-items-center rounded-3xl ${a.bgSoft} ${a.text} ring-1 ${a.ring} sm:h-24 sm:w-24`}>
                <exam.icon className="h-10 w-10 sm:h-12 sm:w-12" />
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-bold text-ink-900">Start preparing</h2>
        <p className="mt-1 text-sm text-ink-600">Pick a section to begin. Each one is tailored to {exam.name}.</p>
        <div className="mt-5 grid gap-5 md:grid-cols-3">
          <NavCard
            icon={BookOpen}
            accent="blue"
            title="Syllabus"
            description={subjectCount > 0 ? `${subjectCount} subjects · ${topicCount} topics covering the complete ${exam.name} syllabus.` : `Complete topic-wise syllabus for ${exam.name}.`}
            to={`/exam/${examSlug}/syllabus`}
            index={0}
          />
          <NavCard
            icon={ListTree}
            accent="emerald"
            title="Exam Pattern"
            description={pattern ? `${pattern.stages.length} stages with papers, marks and negative marking shown visually.` : `Stage-wise structure of the ${exam.name} examination.`}
            to={`/exam/${examSlug}/exam-pattern`}
            index={1}
          />
          <NavCard
            icon={PenSquare}
            accent="amber"
            title="Practice Exercises"
            description={questionCount > 0 ? `${practice!.sets.length} practice sets with ${questionCount} MCQs and explanations.` : `MCQ-based practice questions for ${exam.name}.`}
            to={`/exam/${examSlug}/practice`}
            index={2}
          />
        </div>
      </div>

      {syllabus && (
        <div className="mt-12">
          <div className="flex items-end justify-between">
            <div>
              <h2 className="text-xl font-bold text-ink-900">Syllabus subjects</h2>
              <p className="mt-1 text-sm text-ink-600">Jump straight into a subject.</p>
            </div>
            <Link to={`/exam/${examSlug}/syllabus`} className="group inline-flex items-center gap-1.5 text-sm font-semibold text-primary-700">
              View all <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {syllabus.subjects.map((subj, i) => {
              const Icon = subj.icon;
              return (
                <Link key={subj.id} to={`/exam/${examSlug}/syllabus/${subj.id}`} className="group block animate-fade-up">
                  <div className="card card-hover h-full p-5" style={{ animationDelay: `${i * 40}ms` }}>
                    <span className={`grid h-11 w-11 place-items-center rounded-xl ${a.bgSoft} ${a.text} ring-1 ${a.ring}`}>
                      <Icon className="h-5.5 w-5.5" />
                    </span>
                    <p className="mt-3 font-semibold text-ink-900 group-hover:text-primary-700 transition-colors">{subj.name}</p>
                    <p className="mt-1 text-xs text-ink-500">{subj.topics.length} topics</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

function Meta({ icon: Icon, label, value }: { icon: typeof Building2; label: string; value: string }) {
  return (
    <div>
      <p className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-primary-300">
        <Icon className="h-3.5 w-3.5" /> {label}
      </p>
      <p className="mt-0.5 text-sm font-semibold text-white">{value}</p>
    </div>
  );
}
